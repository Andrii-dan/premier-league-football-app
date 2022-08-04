import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './AddFixture.scss';

const AddFixture = ({ clubsList, setFixtures }) => {
	const uniqueId = uuid();
	const [date, setDate] = useState('2022-10-01');
	const [time, setTime] = useState('12:00');

	const [fixtureInfo, setFixtureInfo] = useState({
		id: uniqueId,
		date: '',
		stadium: '',
		matchStatus: null,
		homeTeam: {
			id: '',
			name: '',
			logo: '',
			shortName: '',
		},
		awayTeam: { id: '', name: '', logo: '', shortName: '' },
		result: { winner: null, homeGoals: null, awayGoals: null },
	});

	const homeTeam = (e) => {
		setFixtureInfo((prev) => {
			return {
				...prev,
				homeTeam: {
					id: clubsList[e].id,
					name: clubsList[e].name,
					logo: clubsList[e].logo,
					shortName: clubsList[e].shortName,
				},
				stadium: clubsList[e].stadium,
			};
		});
	};

	const awayTeam = (e) => {
		setFixtureInfo((prev) => {
			return {
				...prev,
				awayTeam: {
					id: clubsList[e].id,
					name: clubsList[e].name,
					logo: clubsList[e].logo,
					shortName: clubsList[e].shortName,
				},
			};
		});
	};

	useEffect(() => {
		setFixtureInfo((prev) => {
			return { ...prev, date: `${date} ${time} GMT+2` };
		});
	}, [time, date]);

	useEffect(() => {
		clubsList.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
	}, []);

	const handleClick = (e) => {
		e.preventDefault();
		setFixtures((prev) => {
			console.log(prev);
			return [...prev, fixtureInfo];
		});

		setFixtureInfo({
			id: uniqueId,
			date: `${date} ${time} GMT+2`,
			stadium: '',
			matchStatus: null,
			homeTeam: {
				id: '',
				name: '',
				logo: '',
				shortName: '',
			},
			awayTeam: { id: '', name: '', logo: '', shortName: '' },
			result: { winner: null, homeGoals: null, awayGoals: null },
		});
		setTime(time);
		setDate(date);
	};

	return (
		<div className='col-12 form-container'>
			<div className='add-fixture-form'>
				<div>
					<label htmlFor='home-team'>Home</label>
					<select
						name='home-team'
						id='home-team'
						onChange={(e) => homeTeam(e.target.value)}
						required
					>
						<option value=''>Choose a home team</option>
						{clubsList.map((el, index) => {
							return (
								<option value={index} key={el.id}>
									{el.name}
								</option>
							);
						})}
					</select>
				</div>

				<div>
					<label htmlFor='fixture-date'>Date</label>

					<input
						type='date'
						id='fixture-date'
						name='fixture-date'
						value={date}
						min='2022-08-01'
						onChange={(e) => setDate(e.target.value)}
						required
					/>
				</div>

				<div>
					<label htmlFor='fixture-time'>Time</label>

					<input
						type='time'
						id='fixture-time'
						name='fixture-time'
						value={time}
						onChange={(e) => setTime(e.target.value)}
						required
					/>
				</div>

				<div>
					<label htmlFor='away-team'>Away</label>
					<select
						name='away-team'
						id='away-team'
						onChange={(e) => awayTeam(e.target.value)}
						required
					>
						<option value=''>Choose an away team</option>
						{clubsList.map((el, index) => {
							return (
								<option value={index} key={el.id}>
									{el.name}
								</option>
							);
						})}
					</select>
				</div>

				<button onClick={(e) => handleClick(e)}>Add Fixture</button>
			</div>
		</div>
	);
};

export default AddFixture;

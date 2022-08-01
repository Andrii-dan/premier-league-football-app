import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './AddFixture.scss';

const AddFixture = ({ clubsList }) => {
	const uniqueId = uuid();
	const [date, setDate] = useState('2022-08-01');
	const [time, setTime] = useState('00:00');

	const [fixtureInfo, setFixtureInfo] = useState({
		id: uniqueId,
		date: '',
		stadium: '',
		matchStatus: null,
		homeTeam: {},
		awayTeam: {},
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

	const handleSubmit = (e) => {
		e.preventDefault();
		setFixtureInfo((prev) => {
			return { ...prev, date: `${date} ${time} GMT+2` };
		});
	};

	return (
		<div className='col-12 form-container'>
			<form className='add-fixture-form' onSubmit={(e) => handleSubmit(e)}>
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

				<button type='submit'>Add Fixture</button>
			</form>
		</div>
	);
};

export default AddFixture;

{
	/* <fieldset
    onChange={(e) =>
        setMatchdayInfo((prev) => {
            return { ...prev, current: e.target.value };
        })
    }
>
    <legend>Is it a current matchday? </legend>

    <input type='radio' id='yes' name='current-matchday' value={true} />
    <label htmlFor='yes'>Yes</label>

    <input
        type='radio'
        id='no'
        name='current-matchday'
        value={false}
        defaultChecked
    />
    <label htmlFor='no'>No</label>
</fieldset> */
}

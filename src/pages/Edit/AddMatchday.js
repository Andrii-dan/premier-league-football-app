import React, { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import AddFixture from './AddFixture';
import './AddMatchday.scss';

const AddMatchday = ({ clubsList }) => {
	const [fixtures, setFixtures] = useState([]);
	const [matchdayInfo, setMatchdayInfo] = useState({
		round: '',
		current: false,
		matches: [],
	});
	const fixturesCollectionRef = collection(db, 'fixtures22_23');

	useEffect(() => {
		setMatchdayInfo((prev) => {
			return { ...prev, matches: fixtures };
		});
	}, [fixtures]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await addDoc(fixturesCollectionRef, matchdayInfo);
		alert('Matchday has been added');
		setMatchdayInfo({
			round: '',
			current: false,
			matches: [],
		});
		setFixtures([]);
	};

	const handleRemoveItem = (id) => {
		setFixtures(fixtures.filter((item) => item.id !== id));
	};

	return (
		<div className='col-12 form-container'>
			<form className='add-matchday-form' onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor='round'>Choose round</label>
				<input
					type='number'
					id='round'
					name='round'
					value={matchdayInfo.round}
					onChange={(e) =>
						setMatchdayInfo((prev) => {
							return { ...prev, round: e.target.value };
						})
					}
					required
				/>
				<fieldset
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
				</fieldset>
				<AddFixture
					clubsList={clubsList}
					setFixtures={setFixtures}
					fixtures={fixtures}
				/>
				<ul className='fixtures-list'>
					{fixtures.length !== 0
						? fixtures.map((el, index) => {
								return (
									<li key={el.id}>
										<span className='item-order'>{index + 1}</span>
										<span className='home-logo'>
											<img
												src={el.homeTeam.logo}
												alt={`${el.homeTeam.name}'s logo`}
											/>
										</span>
										<span className='home-name'>{el.homeTeam.name}</span>
										<span className='date'>{el.date}</span>
										<span className='away-name'>{el.awayTeam.name}</span>
										<span className='away-logo'>
											<img
												src={el.awayTeam.logo}
												alt={`${el.awayTeam.name}'s logo`}
											/>
										</span>
										<span className='remove-sign'>
											<i
												className='fa-solid fa-xmark'
												onClick={() => handleRemoveItem(el.id)}
											></i>
										</span>
									</li>
								);
						  })
						: null}
				</ul>
				<button type='submit'>Add matchday</button>
			</form>
		</div>
	);
};

export default AddMatchday;

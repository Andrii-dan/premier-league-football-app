import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import Loading from '../StructureComponents/Loading/Loading';
import './Fixtures.scss';

const Fixtures = () => {
	const [matchdayInfo, setMatchdayInfo] = useState([]);
	const [round, setRound] = useState('');
	const options = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
	];
	const currentColRef = query(
		collection(db, 'fixtures22_23'),
		where('current', '==', 'true'),
		limit(1)
	);
	const matchdayColRef = query(
		collection(db, 'fixtures22_23'),
		where('round', '==', round.toString()),
		limit(1)
	);

	useEffect(() => {
		const getCurrentMatchday = async () => {
			const data = await getDocs(currentColRef);
			data.forEach((doc) => {
				setMatchdayInfo(doc.data());
				setRound(Number(doc.data().round));
			});
		};

		getCurrentMatchday();
	}, []);

	useEffect(() => {
		const getMatchday = async () => {
			const data = await getDocs(matchdayColRef);
			data.forEach((doc) => {
				setMatchdayInfo(doc.data());
			});
		};

		getMatchday();
	}, [round]);

	const handleChangeRound = (e) => {
		if (round === 38 && e) {
			return;
		} else if (round === 1 && !e) {
			return;
		} else {
			setRound((prev) => (e ? prev + 1 : prev - 1));
		}
	};

	const onSelectChange = (e) => {
		setRound(parseInt(e.target.value));
	};

	console.log(matchdayInfo);
	console.log(round);

	return (
		<div className='col-6 fixtures'>
			{!matchdayInfo ? (
				<div className='loading-box'>
					<Loading />
				</div>
			) : (
				<>
					<fieldset>
						<h2 className='fixtures__title'>
							<select value={`Matchday ${round}`} onChange={onSelectChange}>
								<option value={`Matchday ${round}`}>
									{`Matchday ${round}`}
								</option>
								{options.map((el, index) => {
									return (
										<option key={index} value={el}>
											Matchday {el}
										</option>
									);
								})}
							</select>
						</h2>
					</fieldset>
					{/* <FixturesDate
						fixturesByDate={fixturesByDate}
						fixtureDate={fixtureDate}
					/> */}
					<div className='fixtures__buttons col-12'>
						<button onClick={() => handleChangeRound(false)}>
							<i className='fas fa-arrow-left'></i> Previous round
						</button>
						<button onClick={() => handleChangeRound(true)}>
							Next round <i className='fas fa-arrow-right'></i>
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Fixtures;

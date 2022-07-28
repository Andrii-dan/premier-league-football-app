import React, { useState } from 'react';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import './Pages.scss';
import './AddClub.scss';

const AddClub = () => {
	const [clubInfo, setClubInfo] = useState({
		website: '',
		stadium: '',
		games: {
			win: {
				away: 0,
				total: 0,
				home: 0,
			},
			played: {
				total: 0,
				home: 0,
				away: 0,
			},
			draw: {
				total: 0,
				home: 0,
				away: 0,
			},
			lose: {
				home: 0,
				away: 0,
				total: 0,
			},
		},
		name: '',
		logo: '',
		points: {
			home: 0,
			averagePerGame: {
				total: 0,
				away: 0,
				home: 0,
			},
			total: 0,
			away: 0,
		},
		coach: '',
		players: {
			goalkeeper: [''],
			midfield: [''],
			attack: [''],
			defence: [''],
			other: [''],
		},
		shortName: '',
		cleanSheet: {
			away: 0,
			total: 0,
			home: 0,
		},
		goals: {
			against: {
				away: 0,
				total: 0,
				home: 0,
				average: {
					total: 0,
					home: 0,
					away: 0,
				},
			},
			for: {
				away: 0,
				total: 0,
				home: 0,
				average: {
					home: 0,
					total: 0,
					away: 0,
				},
			},
		},
	});
	const clubsCollectionRef = collection(db, 'clubs22_23');

	// adding new club to firebase onSubmit and clear all inputs
	const createClub = async (e) => {
		e.preventDefault();
		await addDoc(clubsCollectionRef, clubInfo);
		alert('Club has been added');
		setClubInfo((prev) => {
			return {
				...prev,
				name: '',
				shortName: '',
				logo: '',
				website: '',
				stadium: '',
				coach: '',
			};
		});
	};

	return (
		<div className='main'>
			<div className='form-container'>
				{/* Add Club inputs */}
				<div className='add-club'>
					<form
						onSubmit={(e) => {
							createClub(e);
						}}
						className='add-club-form'
					>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							value={clubInfo.name}
							onChange={(e) =>
								setClubInfo((prev) => {
									return { ...prev, name: e.target.value };
								})
							}
						/>

						<label htmlFor='shortName'>Short Name</label>
						<input
							type='text'
							name='shortName'
							value={clubInfo.shortName}
							maxLength='3'
							onChange={(e) =>
								setClubInfo((prev) => {
									return { ...prev, shortName: e.target.value.toUpperCase() };
								})
							}
						/>

						<label htmlFor='logo'>Logo</label>
						<input
							type='text'
							name='logo'
							value={clubInfo.logo}
							onChange={(e) =>
								setClubInfo((prev) => {
									return { ...prev, logo: e.target.value };
								})
							}
						/>

						<label htmlFor='site'>Website</label>
						<input
							type='text'
							name='site'
							value={clubInfo.website}
							onChange={(e) =>
								setClubInfo((prev) => {
									return { ...prev, website: e.target.value };
								})
							}
						/>

						<label htmlFor='stadium'>Stadium</label>
						<input
							type='text'
							name='stadium'
							value={clubInfo.stadium}
							onChange={(e) =>
								setClubInfo((prev) => {
									return { ...prev, stadium: e.target.value };
								})
							}
						/>

						<label htmlFor='coach'>Coach</label>
						<input
							type='text'
							name='Coach'
							value={clubInfo.coach}
							onChange={(e) =>
								setClubInfo((prev) => {
									return { ...prev, coach: e.target.value };
								})
							}
						/>

						<button type='submit'>Add Club</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddClub;

import React, { useEffect, useState } from 'react';
import AddPlayer from './AddPlayer';
import ClubPlayersList from './ClubPlayersList';
import { db } from '../../../firebase-config';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import './AddPlayers.scss';

const AddPlayers = ({ clubsList }) => {
	const [clubs, setClubs] = useState([]);
	const [goalkeeper, setGoalkeeper] = useState([]);
	const [defence, setDefence] = useState([]);
	const [midfield, setMidfield] = useState([]);
	const [attack, setAttack] = useState([]);
	const [other, setOther] = useState([]);
	const [selectedClub, setSelectedClub] = useState(null);

	useEffect(() => {
		const arr = clubsList;
		setClubs(
			arr.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			})
		);
	}, [clubsList]);

	const handleAddPlayers = async () => {
		const clubRef = doc(db, 'clubs22_23', selectedClub.id);
		await updateDoc(clubRef, {
			'players.goalkeeper': arrayUnion(...goalkeeper),
			'players.defence': arrayUnion(...defence),
			'players.midfield': arrayUnion(...midfield),
			'players.attack': arrayUnion(...attack),
			'players.other': arrayUnion(...other),
		});
		alert('players had been added');
		setGoalkeeper([]);
		setDefence([]);
		setMidfield([]);
		setAttack([]);
		setOther([]);
	};

	return (
		<div className='col-12 form-container'>
			<form className='add-players-form'>
				<div className='input-card'>
					<label htmlFor='clubs'>Club</label>
					<select
						name='clubs'
						id='clubs'
						onChange={(e) => setSelectedClub(clubs[e.target.value])}
						required
					>
						<option value=''>Choose a team</option>
						{clubs.map((el, index) => {
							return (
								<option value={index} key={el.id}>
									{el.name}
								</option>
							);
						})}
					</select>
				</div>
			</form>
			{!selectedClub ? null : (
				<>
					<ClubPlayersList
						players={[goalkeeper, defence, midfield, attack, other]}
					/>
					<AddPlayer
						clubInfo={{ name: selectedClub.name, logo: selectedClub.logo }}
						addByPosition={[
							setGoalkeeper,
							setDefence,
							setMidfield,
							setAttack,
							setOther,
						]}
					/>
					<div className='players-btn-card'>
						<button onClick={handleAddPlayers}>
							Add all {selectedClub.name} Players
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default AddPlayers;

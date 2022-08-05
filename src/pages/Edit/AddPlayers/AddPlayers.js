import React, { useEffect, useState } from 'react';
import AddPlayer from './AddPlayer';
import './AddPlayers.scss';
import ClubPlayersList from './ClubPlayersList';

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
				</>
			)}
		</div>
	);
};

export default AddPlayers;

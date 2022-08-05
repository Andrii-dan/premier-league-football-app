import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './AddPlayer.scss';

const AddPlayer = ({ clubInfo, addByPosition }) => {
	const uniqueId = uuid();
	const selectOptions = [
		'goalkeeper',
		'defender',
		'midfielder',
		'forward',
		'other',
	];
	const [player, setPlayer] = useState({
		id: '',
		number: '',
		name: '',
		surname: '',
		photo: '',
		position: '',
		club: '',
		clubLogo: '',
		nationality: '',
		dateOfBirth: '',
		stats: {
			appearances: 0,
			attack: {
				goals: 0,
				penalties: {
					taken: 0,
					scored: 0,
				},
			},
			teamPlay: {
				assists: 0,
				passes: 0,
			},
			discipline: {
				yellowCards: 0,
				redCards: 0,
			},
			defence: { clenSheets: 0, goalsConceded: 0 },
		},
	});

	useEffect(() => {
		setPlayer((prev) => {
			return {
				...prev,
				club: clubInfo.name,
				clubLogo: clubInfo.logo,
				id: uniqueId,
			};
		});
	}, [clubInfo]);

	const handleSubmit = (e) => {
		e.preventDefault();
		addByPosition[selectOptions.indexOf(player.position)]((prev) => {
			return [...prev, player];
		});
		setPlayer((prev) => {
			return {
				...prev,
				id: '',
				number: '',
				name: '',
				surname: '',
				photo: '',
				position: '',
				nationality: '',
				dateOfBirth: '',
			};
		});
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} className='add-player-form'>
			{/* Player's number */}
			<div className='input-card'>
				<label htmlFor='number'>Number</label>

				<input
					type='number'
					id='number'
					name='number'
					value={player.number}
					placeholder="Player's number"
					min='1'
					max='99'
					onChange={(e) =>
						setPlayer((prev) => {
							return { ...prev, number: e.target.value };
						})
					}
				/>
			</div>

			{/* Player's name */}
			<div className='input-card'>
				<label htmlFor='name'>Name</label>

				<input
					type='text'
					id='name'
					name='name'
					value={player.name}
					placeholder="Player's name"
					onChange={(e) =>
						setPlayer((prev) => {
							return { ...prev, name: e.target.value };
						})
					}
				/>
			</div>

			{/* Player's surname */}
			<div className='input-card'>
				<label htmlFor='surname'>Surname</label>

				<input
					type='text'
					id='surname'
					name='surname'
					value={player.surname}
					placeholder="Player's surname"
					onChange={(e) =>
						setPlayer((prev) => {
							return { ...prev, surname: e.target.value };
						})
					}
					required
				/>
			</div>

			{/* Player's photo */}
			<div className='input-card'>
				<label htmlFor='photo'>Photo</label>

				<input
					type='text'
					id='photo'
					name='photo'
					value={player.photo}
					placeholder="Link to a player's photo"
					onChange={(e) =>
						setPlayer((prev) => {
							return { ...prev, photo: e.target.value };
						})
					}
				/>
			</div>

			{/* Player's position  */}
			<div className='input-card'>
				<label htmlFor='position'>Position</label>

				<select
					type='text'
					id='position'
					name='position'
					value={player.position}
					onChange={(e) =>
						setPlayer((prev) => {
							return { ...prev, position: e.target.value };
						})
					}
					required
				>
					{' '}
					<option value=''>Choose position</option>
					{selectOptions.map((el, index) => {
						return (
							<option value={el} key={index}>
								{el}
							</option>
						);
					})}
				</select>
			</div>

			{/* Player's nationality  */}
			<div className='input-card'>
				<label htmlFor='nationality'>Nationality</label>

				<input
					type='text'
					id='nationality'
					name='nationality'
					value={player.nationality}
					placeholder="Player's nationality"
					onChange={(e) =>
						setPlayer((prev) => {
							return { ...prev, nationality: e.target.value };
						})
					}
					required
				/>
			</div>

			{/* Player's date of birth  */}
			<div className='input-card'>
				<label htmlFor='date-of-birth'>Date of birth</label>

				<input
					type='date'
					id='date-of-birth'
					name='date-of-birth'
					value={player.dateOfBirth}
					min='1970-01-01'
					max='2013-12-31'
					onChange={(e) =>
						setPlayer((prev) => {
							return { ...prev, dateOfBirth: e.target.value };
						})
					}
					required
				/>
			</div>
			<div className='player-btn-card'>
				<button type='submit'>Add Player</button>
			</div>
		</form>
	);
};

export default AddPlayer;

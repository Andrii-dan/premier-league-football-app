import React from 'react';
import './SinglePlayer.scss';

const SinglePlayer = ({ player }) => {
	const regex = /[ ’]/g;

	return (
		<li className='single__player'>
			<div className='single__player-photo'>
				{player.photo === '' ? (
					<i className='fa-solid fa-circle-user'></i>
				) : (
					<img src={player.photo} alt={`${player.surname}'s`} />
				)}
				<span
					className={`flag ${player.nationality
						.toLowerCase()
						.replace(regex, '-')}`}
				/>
			</div>
			<div className='single__player-info'>
				<span className='player-name'>{`${player.name} ${player.surname}`}</span>
				<span className='player-nationality'>{player.nationality}</span>
			</div>
			<span className='single__player-number'>{player.number}</span>
		</li>
	);
};

export default SinglePlayer;

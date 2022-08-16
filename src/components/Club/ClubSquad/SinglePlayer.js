import React from 'react';
import './SinglePlayer.scss';

const SinglePlayer = ({ player }) => {
	return (
		<li className='single__player'>
			<div className='single__player-photo'>
				{player.photo === '' ? (
					<i className='fa-solid fa-circle-user'></i>
				) : (
					<img src={player.photo} alt={`${player.surname}'s`} />
				)}
			</div>
			<div className='single__player-info'>
				<span>{`${player.name} ${player.surname}`}</span>
			</div>
			<span className='single__player-number'>{player.number}</span>
		</li>
	);
};

export default SinglePlayer;

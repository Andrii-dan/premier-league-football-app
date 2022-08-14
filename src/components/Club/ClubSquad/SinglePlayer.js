import React from 'react';
import './SinglePlayer.scss';

const SinglePlayer = ({ player }) => {
	return (
		<li className='col-12 single__player'>
			<div className='single__player-photo'>
				{player.photo === undefined || null ? (
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

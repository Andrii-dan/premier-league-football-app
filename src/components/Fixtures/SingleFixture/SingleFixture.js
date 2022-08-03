import React from 'react';
import './SingleFixture.scss';

const SingleFixture = ({ matchData, additionalClass }) => {
	return (
		<div className={`col-12 fixture ${additionalClass}`}>
			<span className='team home'>{matchData.homeTeam.name}</span>
			<span className='club-logo'>
				<img
					style={{ width: '25px', height: '25px' }}
					src={matchData.homeTeam.logo}
					alt={`${matchData.homeTeam.name} logo`}
				/>
			</span>
			<span className='score'>
				{matchData.matchStatus === null
					? matchData.date.slice(11, 16)
					: `${matchData.result.homeGoals} : ${matchData.result.awayGoals}`}
			</span>
			<span className='club-logo'>
				<img
					style={{ width: '25px', height: '25px' }}
					src={matchData.awayTeam.logo}
					alt={`${matchData.awayTeam.name} logo`}
				/>
			</span>
			<span className='team away'>{matchData.awayTeam.name}</span>
		</div>
	);
};

export default SingleFixture;

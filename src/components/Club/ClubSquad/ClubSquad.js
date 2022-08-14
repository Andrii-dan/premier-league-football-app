import React, { useState } from 'react';
import SinglePlayer from './SinglePlayer';
import './ClubSquad.scss';

const ClubSquad = ({ players, position }) => {
	const [toggle, setToggle] = useState(false);

	return players.length === 0 ? null : (
		<div className='club__squad'>
			<ul>
				<h2 className='club__squad-title'>{position}</h2>
				{!toggle
					? players.slice(0, 3).map((el, index) => {
							return <SinglePlayer key={index} player={el} />;
					  })
					: players.map((el, index) => {
							return <SinglePlayer key={index} player={el} />;
					  })}
				{players.length >= 3 ? (
					<li className='club__squad-btns'>
						{!toggle ? (
							<button onClick={() => setToggle(true)}>
								<i className='fa-solid fa-chevron-down'></i>
							</button>
						) : (
							<button onClick={() => setToggle(false)}>
								<i className='fa-solid fa-chevron-up'></i>
							</button>
						)}
					</li>
				) : null}
			</ul>
		</div>
	);
};

export default ClubSquad;

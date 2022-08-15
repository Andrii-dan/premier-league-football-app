import React, { useEffect, useState } from 'react';
import './WinPercentage.scss';

const WinPercentage = ({ gamesStat }) => {
	const [percentage, setPercentage] = useState(0);
	const [homePercentage, setHomePercentage] = useState(0);
	const [awayPercentage, setAwayPercentage] = useState(0);

	useEffect(() => {
		setPercentage(() => {
			return ((100 / gamesStat.played.total) * gamesStat.win.total).toFixed();
		});

		setHomePercentage(() => {
			return ((100 / gamesStat.played.home) * gamesStat.win.home).toFixed();
		});

		setAwayPercentage(() => {
			return ((100 / gamesStat.played.away) * gamesStat.win.away).toFixed();
		});
	}, [gamesStat]);

	return (
		<div className='win__percentage'>
			<div>
				<h2 className='win__percentage-title'>Win Percentage</h2>
			</div>

			<div className='col-12 win__percentage-box'>
				<div className='percentage__box'>
					<span className='percentage__box-title'>Total</span>
					<span
						className={
							percentage >= 65
								? 'high'
								: percentage >= 50
								? 'normal'
								: percentage >= 30
								? 'low'
								: 'very-low'
						}
					>
						{percentage === isNaN ? 0 : percentage}%
					</span>
				</div>

				<div className='percentage__box'>
					<span className='percentage__box-title'>Home</span>
					<span
						className={
							percentage >= 65
								? 'high'
								: percentage >= 50
								? 'normal'
								: percentage >= 30
								? 'low'
								: 'very-low'
						}
					>
						{homePercentage === isNaN ? 0 : homePercentage}%
					</span>
				</div>
				<div className='percentage__box'>
					<span className='percentage__box-title'>Away</span>
					<span
						className={
							percentage >= 65
								? 'high'
								: percentage >= 50
								? 'normal'
								: percentage >= 30
								? 'low'
								: 'very-low'
						}
					>
						{awayPercentage}
					</span>
				</div>
			</div>
		</div>
	);
};

export default WinPercentage;

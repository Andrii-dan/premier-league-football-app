import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/StructureComponents/Loading/Loading';
import './StandingPreview.scss';

const StandingPreview = ({ clubsList }) => {
	const [standingToggle, setStandingToggle] = useState([0, 10]);
	let navigate = useNavigate();

	const handleClick = (start, end) => {
		setStandingToggle([start, end]);
	};

	return (
		<div className='col-3'>
			{clubsList.length === 0 ? (
				<div className='loading-box'>
					<Loading />
				</div>
			) : (
				<ul className='standing__preview'>
					<li className='standing__preview-heading'>
						<span className='club__position'></span>
						<span className='club__logo'></span>
						<span className='club__name'></span>
						<span className='club__games'>GP</span>
						<span className='club__goals-difference'>GD</span>
						<span className='club__points'>Pts</span>
					</li>
					{clubsList
						.sort((a, b) => a.position - b.position)
						.slice(standingToggle[0], standingToggle[1])
						.map((el, index) => {
							return (
								<li
									key={index}
									className={
										index === 3
											? 'col-12 club ucl-zone'
											: index === 16
											? 'col-12 club relegation-zone'
											: 'col-12 club'
									}
									onClick={() => {
										navigate(`/clubs/${el.id}`);
									}}
								>
									<span className='club__position'>{el.position}</span>
									<span className='club__logo'>
										<img
											style={{ width: '25px', height: '25px' }}
											src={el.logo}
											alt={el.name}
										/>
									</span>
									<span className='club__name'>{el.name}</span>
									<span className='club__games'>{el.games.played.total}</span>
									<span className='club__goals-difference'>
										{el.goals.for.total - el.goals.against.total}
									</span>
									<span className='club__points'>{el.points.total}</span>
								</li>
							);
						})}

					<li className='col-12 standing__preview-buttons'>
						<button onClick={() => handleClick(0, 10)}>
							<i className='fas fa-arrow-left'></i> Top{' '}
						</button>
						<button
							onClick={() => {
								navigate('/standing');
							}}
						>
							See Full
						</button>
						<button onClick={() => handleClick(10, 20)}>
							Bottom <i className='fas fa-arrow-right'></i>
						</button>
					</li>
				</ul>
			)}
		</div>
	);
};

export default StandingPreview;

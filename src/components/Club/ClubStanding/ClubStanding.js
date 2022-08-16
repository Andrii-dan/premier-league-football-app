import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../StructureComponents/Loading/Loading';
import './ClubStanding.scss';

const ClubStanding = ({ clubsList, clubId }) => {
	let navigate = useNavigate();

	return clubsList.length === 0 ? (
		<div className='loading-box'>
			<Loading />
		</div>
	) : (
		<ul className='club__standing'>
			<li className='club__standing-heading'>
				<span className='club__position'></span>
				<span className='club__logo'></span>
				<span className='club__name'></span>
				<span className='club__games'>GP</span>
				<span className='club__goals-difference'>GD</span>
				<span className='club__points'>Pts</span>
			</li>
			{clubsList
				.sort((a, b) => a.position - b.position)
				.map((el, index) => {
					return (
						<li
							key={index}
							className={
								el.position === 4 && el.id === clubId
									? 'col-12 club ucl-zone mark'
									: el.position === 17 && el.id === clubId
									? 'col-12 club relegation-zone mark'
									: el.position === 4
									? 'col-12 club ucl-zone'
									: el.position === 17
									? 'col-12 club relegation-zone'
									: el.id === clubId
									? 'col-12 club mark'
									: 'col-12 club'
							}
							onClick={() => {
								navigate(`/club/${el.id}`);
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
		</ul>
	);
};

export default ClubStanding;

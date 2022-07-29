import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/StructureComponents/Loading/Loading';
import { motion } from 'framer-motion';
import './Standing.scss';

const Standing = ({ clubsList }) => {
	const animateFrom = { opacity: 0, y: -100 };
	const animateTo = { opacity: 1, y: 0 };
	let navigate = useNavigate();

	return (
		<div className='col-9'>
			{clubsList.length === 0 ? (
				<div className='loading-box'>
					<Loading />
				</div>
			) : (
				<ul className='standing'>
					<li className='standing-heading'>
						<span className='club__position'></span>
						<span className='club__logo'></span>
						<span className='club__name'></span>
						<span className='club__games'>GP</span>
						<span className='club__wins'>Win</span>
						<span className='club__draws'>Draw</span>
						<span className='club__loses'>Lose</span>
						<span className='club__goals-for'>G</span>
						<span className='club__goals-against'>GA</span>
						<span className='club__goals-difference'>GD</span>
						<span className='club__points'>Pts</span>
						{/* <span className='club__form'>Form</span> */}
						{/* <span className='club__status'></span> */}
					</li>
					{clubsList
						.sort((a, b) => a.position - b.position)
						.map((el, index) => {
							return (
								<motion.li
									initial={animateFrom}
									animate={animateTo}
									transition={{ delay: index / 50 }}
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
									<span className='club__wins'>{el.games.win.total}</span>
									<span className='club__draws'>{el.games.draw.total}</span>
									<span className='club__loses'>{el.games.lose.total}</span>
									<span className='club__goals-for'>{el.goals.for.total}</span>
									<span className='club__goals-against'>
										{el.goals.against.total}
									</span>
									<span className='club__goals-difference'>
										{el.goals.for.total - el.goals.against.total}
									</span>
									<span className='club__points'>{el.points.total}</span>
									{/* <span className='club__form'>{el.form}</span>
							<span className='club__status'>{el.status}</span> */}
								</motion.li>
							);
						})}
				</ul>
			)}
		</div>
	);
};

export default Standing;

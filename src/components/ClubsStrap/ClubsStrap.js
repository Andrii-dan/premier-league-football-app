import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loading from '../StructureComponents/Loading/Loading';
import './ClubsStrap.scss';

const ClubsStrap = ({ clubsList }) => {
	const animateFrom = { opacity: 0, y: -40 };
	const animateTo = { opacity: 1, y: 0 };
	let navigate = useNavigate();

	return (
		<div className='clubs__strap'>
			{/* renders clubs logo */}
			{clubsList.length === 0 ? (
				<Loading />
			) : (
				clubsList.map((el, index) => {
					return (
						<motion.span
							initial={animateFrom}
							animate={animateTo}
							transition={{ delay: index / 50 }}
							key={index}
							onClick={() => {
								navigate(`/clubs/${el.id}`);
							}}
						>
							<img className='club__logo' src={el.logo} alt={`${el.name}'s`} />
						</motion.span>
					);
				})
			)}
		</div>
	);
};

export default ClubsStrap;

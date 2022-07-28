import React from 'react';
import links from './Links';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './MobileNavigation.scss';

const MobileNavigation = ({ setToggle }) => {
	const animateFrom = { opacity: 0, y: -40 };
	const animateTo = { opacity: 1, y: 0 };

	let navigate = useNavigate();

	return (
		<nav>
			<ul className='mobile-nav'>
				{links.map((el, index) => {
					return (
						<motion.li
							initial={animateFrom}
							animate={animateTo}
							transition={{ delay: el.delay }}
							key={index}
						>
							<span
								onClick={() => {
									navigate(el.ref);
									setToggle(false);
								}}
							>
								{el.text}
							</span>
						</motion.li>
					);
				})}
			</ul>
		</nav>
	);
};

export default MobileNavigation;

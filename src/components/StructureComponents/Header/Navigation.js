import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import links from './Links';
import './Navigation.scss';

const Navigation = () => {
	const animateFrom = { opacity: 0, y: -40 };
	const animateTo = { opacity: 1, y: 0 };
	let navigate = useNavigate();

	return (
		<nav>
			<ul className='navigation'>
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

export default Navigation;

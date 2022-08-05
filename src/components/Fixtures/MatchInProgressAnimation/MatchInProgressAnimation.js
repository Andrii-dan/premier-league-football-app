import React from 'react';
import { motion } from 'framer-motion';
import './MatchInProgressAnimation.scss';

const MatchInProgressAnimation = () => {
	return (
		<span className='inprogress-wrapper'>
			<motion.span
				animate={{
					x: 22,
					transition: {
						yoyo: Infinity,
						duration: 0.8,
					},
				}}
				className='inprogress-circle'
			></motion.span>
		</span>
	);
};

export default MatchInProgressAnimation;

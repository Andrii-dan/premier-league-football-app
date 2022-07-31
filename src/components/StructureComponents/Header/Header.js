import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { motion } from 'framer-motion';
import './Header.scss';
import MobileNavigation from './MobileNavigation';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	let navigate = useNavigate();

	return (
		<header className='nav-bar' style={toggle ? { position: 'fixed' } : null}>
			<div className='nav-bar-section'>
				<span
					onClick={() => {
						navigate('/');
					}}
					className='logo'
				>
					{' '}
					Premier{' '}
					<img
						src='https://firebasestorage.googleapis.com/v0/b/pm-league-app.appspot.com/o/siteLogo%2Flogo.png?alt=media&token=34c98fcf-6d76-4782-85b2-261861c062bf'
						alt='logo'
						style={{ width: '35px', height: '35px' }}
					/>{' '}
					League
				</span>

				{/* desktop naviagation component */}
				<Navigation />

				{/* mobile navigation component  */}
				{toggle ? <MobileNavigation setToggle={setToggle} /> : null}

				{/* toggles hmburger(bars) and close icons, open and close mobile navigation*/}
				{!toggle ? (
					<motion.i
						whileTap={{ x: [0, 100, 0] }}
						className='fa-solid fa-bars'
						onClick={() => setToggle(true)}
					></motion.i>
				) : (
					<motion.i
						whileTap={{ x: [0, 100, 0] }}
						className='fa-solid fa-xmark'
						onClick={() => setToggle(false)}
					></motion.i>
				)}
			</div>
		</header>
	);
};

export default Header;

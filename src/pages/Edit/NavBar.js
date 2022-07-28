import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
	const navigate = useNavigate();

	return (
		<div className='container'>
			<ul>
				<li>
					<button
						className='btn'
						onClick={() => {
							navigate('/');
						}}
					>
						Home
					</button>
				</li>
				<li>
					<button
						className='btn'
						onClick={() => {
							navigate('/add-club');
						}}
					>
						Add Club
					</button>
				</li>
				<li>
					<button
						className='btn'
						onClick={() => {
							navigate('*');
						}}
					>
						Add Player to the club
					</button>
				</li>
				<li>
					<button className='btn'>Add Standing</button>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
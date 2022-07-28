import React from 'react';
import './Pages.scss';
import NavBar from './NavBar';

const AdminPanel = () => {
	return (
		<div className='main'>
			<div className='form-container'>
				{' '}
				<NavBar />
				Home
			</div>
		</div>
	);
};

export default AdminPanel;

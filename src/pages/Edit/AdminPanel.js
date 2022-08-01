import React from 'react';
import './Pages.scss';
import NavBar from './NavBar';

const AdminPanel = () => {
	return (
		<div className='main col-12'>
			<div className='form-container'>
				{' '}
				<NavBar />
				Home
			</div>
		</div>
	);
};

export default AdminPanel;

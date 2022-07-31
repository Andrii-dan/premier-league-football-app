import React from 'react';
import './Footer.scss';

const Footer = () => {
	const year = new Date().getFullYear();

	return <div className='footer'>Copyright &copy; {year}</div>;
};

export default Footer;

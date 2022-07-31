import React from 'react';
import './Footer.scss';

const Footer = () => {
	const year = new Date().getFullYear();

	return <footer className='footer'>Copyright &copy; {year}</footer>;
};

export default Footer;

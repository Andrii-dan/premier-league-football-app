import React from 'react';
import ClubsStrap from '../../ClubsStrap/ClubsStrap';
import './Content.scss';

const Content = (props) => {

	return (
		<main className='container content__container'>
			<ClubsStrap clubsList={props.clubsList} />
			<div className='row'>{props.children}</div>
		</main>
	);
};

export default Content;

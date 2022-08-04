import React, { useEffect, useState } from 'react';
import SingleFixture from '../SingleFixture/SingleFixture';
import './FixturesByDate.scss';

const FixturesByDate = ({ fixtureDates, matchdayInfo }) => {
	const [fixtures, setFixtures] = useState([]);
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	useEffect(() => {
		const res = fixtureDates.map((el) => {
			return matchdayInfo.filter((item) => {
				return item.date.slice(0, 10) === el;
			});
		});
		setFixtures(res);
	}, [matchdayInfo]);

	return (
		<div className='fixture__date-container'>
			{fixtures.map((el, index) => {
				return (
					<div key={index}>
						<div className='col-12 fixture__date'>
							<h3 className='fixture__date-info'>
								{days[new Date(fixtureDates[index]).getDay()]}{' '}
								{new Date(fixtureDates[index]).getDate()}{' '}
								{months[new Date(fixtureDates[index]).getMonth()]}
							</h3>
						</div>

						{el.map((match) => {
							return <SingleFixture key={match.id} matchData={match} />;
						})}
					</div>
				);
			})}
		</div>
	);
};

export default FixturesByDate;

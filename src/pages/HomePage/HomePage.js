import React from 'react';
import Fixtures from '../../components/Fixtures/Fixtures';
import StandingPreview from '../../components/Standings/StandingPreview';

const HomePage = ({ clubsList }) => {
	return (
		<>
			<StandingPreview clubsList={clubsList} />
			<Fixtures />
		</>
	);
};

export default HomePage;

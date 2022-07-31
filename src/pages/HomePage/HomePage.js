import React from 'react';
import StandingPreview from '../../components/Standings/StandingPreview';

const HomePage = ({ clubsList }) => {
	return (
		<>
			<StandingPreview clubsList={clubsList} />
		</>
	);
};

export default HomePage;

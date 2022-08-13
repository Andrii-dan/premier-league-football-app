import React from 'react';
import { useParams } from 'react-router-dom';
import Club from '../../components/Club/Club';

const ClubPage = ({ clubsList }) => {
	let { clubId } = useParams();

	return (
		<>
			<Club clubId={clubId} clubsList={clubsList} />
		</>
	);
};

export default ClubPage;

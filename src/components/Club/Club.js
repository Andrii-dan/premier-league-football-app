import React, { useEffect, useState } from 'react';
import Loading from '../StructureComponents/Loading/Loading';
import './Club.scss';
import ClubSquad from './ClubSquad/ClubSquad';

const Club = ({ clubId, clubsList }) => {
	const [clubInfo, setClubInfo] = useState(false);

	useEffect(() => {
		setClubInfo(
			clubsList.find((el) => {
				return el.id === clubId;
			})
		);
	}, [clubId, clubsList]);

	return !clubInfo ? (
		<div className='loading-box'>
			<Loading />
		</div>
	) : (
		<>
			<div className='col-12 club__page'>
				<img
					className='club__page-logo'
					src={clubInfo.logo}
					alt={`${clubInfo.name} logo`}
				/>{' '}
				<h1 className='club__page-title'>{clubInfo.name}</h1>
			</div>
			<div className='col-3'>
				<ClubSquad
					players={clubInfo.players.goalkeeper}
					position={'Goalkeeper'}
				/>
				<ClubSquad players={clubInfo.players.defence} position={'Defence'} />
				<ClubSquad players={clubInfo.players.midfield} position={'Midfield'} />
				<ClubSquad players={clubInfo.players.attack} position={'Attack'} />
				<ClubSquad players={clubInfo.players.other} position={'Other'} />
			</div>
			<div className='col-6'>
				{/* <NextFixture clubId={clubId} /> */}
				{/* <LastFixtures clubId={clubId} /> */}
				{/* <ClubStat clubInfo={clubInfo} /> */}
			</div>
			<div className='col-3'>
				{/* <WinPercentege clubMatches={clubInfo.fixtures} /> */}
				{/* <ClubStanding clubId={clubId} /> */}
			</div>
		</>
	);
};

export default Club;

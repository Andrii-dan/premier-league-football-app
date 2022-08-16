import React, { useEffect, useState } from 'react';
import Loading from '../StructureComponents/Loading/Loading';
import ClubSquad from './ClubSquad/ClubSquad';
import ClubStat from './ClubStat/ClubStat';
import './Club.scss';
import WinPercentage from './WinPercentage/WinPercentage';
import ClubStanding from './ClubStanding/ClubStanding';

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
				<ClubStat clubInfo={clubInfo} />
			</div>
			<div className='col-3'>
				<WinPercentage gamesStat={clubInfo.games} />
				<ClubStanding clubsList={clubsList} clubId={clubInfo.id} />
			</div>
		</>
	);
};

export default Club;

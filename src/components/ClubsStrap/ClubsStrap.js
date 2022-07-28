import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import Loading from '../StructureComponents/Loading/Loading';
import './ClubsStrap.scss';

const ClubsStrap = () => {
	const [clubsList, setClubsList] = useState([]);
	const clubsCollectionRef = collection(db, 'clubs22_23');
	let navigate = useNavigate();

	useEffect(() => {
		// takes data from firebase with all clubs (objects) and its info like name, logo, games etc., and updates clubList state
		const getData = async () => {
			const data = await getDocs(clubsCollectionRef);
			setClubsList(
				data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
		};

		getData();
	}, []);

	return (
		<div className='clubs__strap'>
			{/* renders clubs logo */}
			{clubsList.length === 0 ? (
				<Loading />
			) : (
				clubsList.map((el, index) => {
					return (
						<span
							key={index}
							onClick={() => {
								navigate(`/clubs/${el.id}`);
							}}
						>
							<img className='club__logo' src={el.logo} alt={`${el.name}'s`} />
						</span>
					);
				})
			)}
		</div>
	);
};

export default ClubsStrap;

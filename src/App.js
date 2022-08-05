import React, { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import AddClub from './pages/Edit/AddClub';
import NotFoundPage from './pages/NotFoundPage';
import AdminPanel from './pages/Edit/AdminPanel';
import Header from './components/StructureComponents/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Content from './components/StructureComponents/Content/Content';
import StandingPage from './pages/Standing/StandingPage';
import Footer from './components/StructureComponents/Footer/Footer';
import AddMatchday from './pages/Edit/AddMatchday';
import AddPlayers from './pages/Edit/AddPlayers/AddPlayers';

function App() {
	const [clubsList, setClubsList] = useState([]);
	const clubsCollectionRef = collection(db, 'clubs22_23');

	useEffect(() => {
		// takes data from firebase with all clubs (objects) and its info like name, logo, games etc., and updates clubList state
		const getClubs = async () => {
			const data = await getDocs(clubsCollectionRef);
			setClubsList(
				data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
		};

		getClubs();
	}, []);

	return (
		<Router>
			<Header />
			<Content clubsList={clubsList}>
				<Routes>
					<Route path='/' element={<HomePage clubsList={clubsList} />} />
					<Route
						path='/standing'
						element={<StandingPage clubsList={clubsList} />}
					/>
					<Route path='/edit' element={<AdminPanel />} />
					<Route path='/add-club' element={<AddClub />} />
					<Route
						path='/add-matchday'
						element={<AddMatchday clubsList={clubsList} />}
					/>
					<Route
						path='/add-players'
						element={<AddPlayers clubsList={clubsList} />}
					/>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Content>
			<Footer />
		</Router>
	);
}

export default App;

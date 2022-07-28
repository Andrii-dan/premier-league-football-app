import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddClub from './pages/Edit/AddClub';
import NotFoundPage from './pages/NotFoundPage';
import AdminPanel from './pages/Edit/AdminPanel';
import Header from './components/StructureComponents/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Content from './components/StructureComponents/Content/Content';

function App() {
	return (
		<Router>
			<Header />
			<Content>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/edit' element={<AdminPanel />} />
					<Route path='/add-club' element={<AddClub />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Content>
		</Router>
	);
}

export default App;

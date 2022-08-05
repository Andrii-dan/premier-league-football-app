import React from 'react';
import './ClubPlayersList.scss';

const ClubPlayersList = ({ players }) => {
	return (
		<div className='club-players'>
			{/* goalkeepers */}
			<ul className='players-list'>
				<h2>Goalkeeper</h2>
				{players[0].length === 0 ? (
					<p>No players yet</p>
				) : (
					players[0].map((el) => {
						return <li key={el.id}>{`${el.name} ${el.surname}`}</li>;
					})
				)}
			</ul>

			{/* defenders */}
			<ul className='players-list'>
				<h2>Defence</h2>
				{players[1].length === 0 ? (
					<p>No players yet</p>
				) : (
					players[1].map((el) => {
						return <li key={el.id}>{`${el.name} ${el.surname}`}</li>;
					})
				)}
			</ul>

			{/* midfielders */}
			<ul className='players-list'>
				<h2>Midfield</h2>
				{players[2].length === 0 ? (
					<p>No players yet</p>
				) : (
					players[2].map((el) => {
						return <li key={el.id}>{`${el.name} ${el.surname}`}</li>;
					})
				)}
			</ul>

			{/* attackers */}
			<ul className='players-list'>
				<h2>Attack</h2>
				{players[3].length === 0 ? (
					<p>No players yet</p>
				) : (
					players[3].map((el) => {
						return <li key={el.id}>{`${el.name} ${el.surname}`}</li>;
					})
				)}
			</ul>

			{/* others */}
			<ul className='players-list'>
				<h2>Other</h2>
				{players[4].length === 0 ? (
					<p>No players yet</p>
				) : (
					players[4].map((el) => {
						return <li key={el.id}>{`${el.name} ${el.surname}`}</li>;
					})
				)}
			</ul>
		</div>
	);
};

export default ClubPlayersList;

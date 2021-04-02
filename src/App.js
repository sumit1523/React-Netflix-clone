import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

const App = () => {
	return (
		<div className="app" >
			<Nav />
			<Banner />
			<Row title="NETFLIX originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
			<Row title="Trending now" fetchURL={requests.fetchTrending} isLargeRow />
			<Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow />
			<Row title="Action Movies" fetchURL={requests.fetchActionMovies} isLargeRow />
			<Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} isLargeRow />
			<Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} isLargeRow />
			<Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} isLargeRow />
			<Row title="Documentaries" fetchURL={requests.fetchDocumentaries} isLargeRow />
		</div>
	);
}

export default App;

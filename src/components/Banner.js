import React, { useState, useEffect } from 'react';
import './banner.css';
import axios from '../axios';
import request from '../requests';
import ReactPlayerModal from './ReactPlayerModal';

const Banner = () => {
	const [movie, setMovie] = useState({});
	const [show, setShow] = useState(false);
	const [videoId, setVideoId] = useState(null);

	const openModal = (vId) => {
		setShow(true);
		setVideoId(vId);
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(request.fetchNetflixOriginals)
				const randomNumber = Math.floor(Math.random() * res.data.results.length)
				setMovie(res.data.results[randomNumber])
			}
			catch (err) {
				console.log(err);
			}
		}
		fetchData();
	}, []);

	const truncate = (str, n) => {
		return str.length > n ? str.substring(0, n - 1) + "..." : str
	}
	return (
		movie &&
		<header className='banner' style={
			{
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
			}
		}>
			{show && <ReactPlayerModal modalState={show} setShow={setShow} videoId={videoId} />}
			<div className="banner__contents">
				<h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
				<div className="banner__buttons">
					<button className="banner__button" onClick={() => openModal(movie?.id)}>Play</button>
				</div>
				{movie?.overview &&
					<h1 className="banner__description">{truncate(movie?.overview, 300)} </h1>
				}

			</div>
			<div className="banner--fadeBottom" />
		</header >

	);
};

export default Banner;
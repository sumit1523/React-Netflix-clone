import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './row.css';
import ReactPlayerModal from './ReactPlayerModal';

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	const [show, setShow] = useState(false);
	const [videoId, setVideoId] = useState();

	const openModal = (vId) => {
		setShow(true);
		setVideoId(vId);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(fetchURL);
				setMovies(res?.data?.results)
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [fetchURL]);

	return (
		<div className='row' >
			<h2>{title}</h2>
			{show && <ReactPlayerModal modalState={show} setShow={setShow} videoId={videoId} />}
			<div className="row__posters">
				{movies && movies?.map(
					movie =>
						<div className="row__poster--container">
							<img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
								key={movie?.id}
								src={`${BASE_URL}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
								alt={movie?.name} />
							<div className="row__poster--overlay">
								<div className="row__poster--overlay__text">
									<p>{movie?.name || movie?.title}</p>
									<p>Rating{' '}:{' '}{movie?.vote_average}</p>
									<button className="nav__button" onClick={() => openModal(movie?.id)}>Play</button>
								</div>
							</div>
							<div>

							</div>
						</div>
				)}

			</div>
		</div >
	);
};

export default Row;
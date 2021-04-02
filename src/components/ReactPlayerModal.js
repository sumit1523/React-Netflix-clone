import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import ReactPlayer from 'react-player'
import './reactPlayerModal.css';
import axios from '../axios';

const ReactPlayerModal = ({ modalState, setShow, videoId }) => {
	const [yVideoId, setYVideoId] = useState();

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)'
		}
	};
	const fetchURL = `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=47164a591ff193f9d2ca09bb2c867017&language=en-US`;
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(fetchURL);
				setYVideoId(res?.data?.results?.[0]?.key);
				console.log(res?.data?.results?.[0]?.key, 'kl');
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [fetchURL])
	const closeModal = () => {
		setShow(false);
	}
	// const yId = yVideoId || '8f9p3_FNKuM';
	return (
		<Modal
			isOpen={modalState}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Youtube Modal"
		>
			<h2>Hello</h2>
			<button className="nav__button closeModal" onClick={closeModal}>close</button>
			<div>Playing video in Modal</div>
			<div>
				{yVideoId ?
					<ReactPlayer playing controls style={{ customStyles }} url={`https://www.youtube.com/watch?v=${yVideoId}`} />
					: <p style={{ color: 'red' }}>There is no video Available</p>
				}
			</div>
			{/* 8f9p3_FNKuM */}
		</Modal>
	)
}

export default ReactPlayerModal;

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import './reactPlayerModal.css';
import axios from '../axios';
import { API_KEY } from '../config';

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
	const fetchURL = `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${API_KEY}&language=en-US`;
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(fetchURL);
				setYVideoId(res?.data?.results?.[0]?.key);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [fetchURL]);

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
			<h2>Welcome</h2>
			<span className="closeModal" onClick={closeModal}></span>
			<div style={{ padding: '10px' }}>
				{yVideoId ?
					<ReactPlayer playing controls style={{ customStyles }} url={`https://www.youtube.com/watch?v=${yVideoId}`} />
					: <p style={{ color: 'red' }}>There is no video Available</p>
				}
			</div>
		</Modal>
	)
}

export default ReactPlayerModal;

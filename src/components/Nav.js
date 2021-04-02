import React, { useEffect, useState } from 'react';
import './nav.css'

const Nav = () => {
	const [show, handleShow] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 80) {
				handleShow(true)
			}
			else
				handleShow(false)
		})
		return () => {
			window.removeEventListener("scroll")
		}
	}, [])

	return (
		<div className={`nav ${show && "nav_black"}`}>
			<img src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" alt="netflix logo" className="nav__logo" />
			<div className="nav__buttons">
				<button className="nav__button">
					<a href="https://github.com/sumit1523/">Portfolio</a>
				</button>
				<button className="nav__button">
					<a href="https://github.com/sumit1523/">Github</a>
				</button>
			</div>
		</div>
	);
};

Nav.propTypes = {

};

export default Nav;
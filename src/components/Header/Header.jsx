import React from 'react';
import Logo from '../../assets/twitter.svg';
import Dots from '../../assets/dots.svg';
import Notifications from '../../assets/notifications.svg';
import EmailIcon from '../../assets/email.svg';
import Grid from '../../assets/grid.svg';
import Home from '../../assets/home.svg';
import Triangle from '../../assets/triangle.svg';
import { useSelector } from 'react-redux';
import './Header.css';

export const Header = () => {
	const { picture, firstName, lastName } = useSelector(
		(state) => state.user.user
	);
	return (
		<header>
			<div className='header__logo'>
				<img
					className='logo__image'
					alt=''
					src={Logo}
				/>
				<input
					className='header__search'
					placeholder='Explore'
				/>
			</div>
			<div className='profile'>
				<button className='header__button'>
					<img
						className='header__grid-icon'
						alt=''
						src={Home}
					></img>
					<span className='header__home'>Home</span>
				</button>
				<img
					className='header__grid-icon'
					alt=''
					src={Grid}
				/>
				<img
					className='header__grid-icon'
					alt=''
					src={EmailIcon}
				/>
				<img
					className='header__grid-icon'
					alt=''
					src={Notifications}
				/>
				<div className='header__button-profile'>
					<img
						className='avatar'
						alt='avatar'
						src={picture}
					/>
					<span className='header__profile-name'>
						{firstName} {lastName}
					</span>
					<img
						className='header__grid-icon'
						src={Triangle}
						alt='triangle icon'
					/>
				</div>
				<img
					className='header__grid-icon'
					alt=''
					src={Dots}
				/>
			</div>
		</header>
	);
};

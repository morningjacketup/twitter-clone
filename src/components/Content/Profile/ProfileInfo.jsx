import React, { useEffect, useState } from 'react';
import './ProfileInfo.css';
import { useSelector } from 'react-redux';

export const ProfileInfo = () => {
	const [loading, setLoading] = useState(true);
	const { picture, firstName, lastName } = useSelector(
		(state) => state.user.user
	);

	useEffect(() => {
		// модальное окно загрузки
		// fetch.then(r => {
		//      if (r) {
		// setLoading(false)
		// setData(r.data[0])
		// }.catch(err => setModal(error, 'error'))
		// })
	}, []);

	return (
		<div className='profile__container'>
			<div className='profile__bg'></div>
			<img
				className='profile__avatar'
				alt=''
				src={picture}
			/>
			<h1 className='profile__name'>
				{firstName} {lastName}
			</h1>
			<span className='profile__username'>@notojoyoo</span>
			<p className='profile__description'>
				Penting gak Penting yang penting Posting
			</p>
			<div className='profile__followers-container'>
				<div className='profile__following'>
					<span>6,634</span>
					<span>Following</span>
				</div>
				<div className='profile__line'></div>
				<div className='profile__followers'>
					<span>9,991</span>
					<span>Followers</span>
				</div>
			</div>
			<a
				className='profile__link'
				href='/profile'
			>
				My Profile
			</a>
		</div>
	);
};

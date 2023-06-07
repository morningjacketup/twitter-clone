import React from 'react';
import Avatar from '../../../assets/avatar.jpeg';
import './Followers.css';

export const Followers = () => {
	return (
		<div className='followers__container'>
			<h1>Who is follow you</h1>
			<ul className='follower__list'>
				<li className='follower__item'>
					<img
						className='follower__item-avatar'
						src={Avatar}
						alt=''
					/>
					<div className='follower__info'>
						<span>Product Hunt</span>
						<span>@ProductHunt</span>
					</div>
					<button className='follower__btn'>Follow</button>
				</li>
				<li className='follower__item'>
					<img
						className='follower__item-avatar'
						src={Avatar}
						alt=''
					/>
					<div className='follower__info'>
						<span>Product Hunt</span>
						<span>@ProductHunt</span>
					</div>
					<button className='follower__btn'>Follow</button>
				</li>
				<li className='follower__item'>
					<img
						className='follower__item-avatar'
						src={Avatar}
						alt=''
					/>
					<div className='follower__info'>
						<span>Product Hunt</span>
						<span>@ProductHunt</span>
					</div>
					<button className='follower__btn'>Follow</button>
				</li>
			</ul>
			<button className='follower__btn-more'>Show more</button>
		</div>
	);
};

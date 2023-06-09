import React, { useEffect, useState } from 'react';
import './Followers.css';

export const Followers = () => {
	const [followers, setFollowers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await fetch(
				'https://dummyapi.io/data/v1/user?limit=10',
				{
					headers: {
						'app-id': '6480293687c6130d3d3f302f'
					}
				}
			);
			const json = await data.json();
			setFollowers(json.data);
		}
		fetchData();
	}, []);

	return (
		<div className='followers__container'>
			<h1>Who is follow you</h1>
			<ul className='follower__list'>
				{followers.slice(6, 9).map((el, i) => {
					return (
						<li
							className='follower__item'
							key={i}
						>
							<img
								className='follower__item-avatar'
								src={el.picture}
								alt=''
							/>
							<div className='follower__info'>
								<span>
									{el.firstName} {el.lastName}
								</span>
								<span>@{el.firstName}</span>
							</div>
							<button className='follower__btn'>Follow</button>
						</li>
					);
				})}
			</ul>
			<button className='follower__btn-more'>Show more</button>
		</div>
	);
};

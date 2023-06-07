import React from 'react';
import { ProfileInfo } from './Profile/ProfileInfo';
import { Followers } from './Followers/Followers';
import { Trends } from './Trends/Trends';
import './Content.css';
import { Main } from './Main/Main';
import { Header } from '../Header/Header';

export const Content = () => {
	return (
		<>
			<Header />
			<div className='content'>
				<div className='content__profile-info'>
					<ProfileInfo />
					<Followers />
				</div>
				<div>
					<Main />
				</div>
				<div>
					<Trends />
				</div>
			</div>
		</>
	);
};

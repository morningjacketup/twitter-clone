import React from 'react';
import SettingIcon from '../../../assets/setting.svg';
import Dots from '../../../assets/dots-3.svg';
import './Trends.css';

const trendsInIndonesia = {
	title: 'Trending in Indonesia',
	data: [
		{
			trend: '#Minions',
			tweets: 97.7
		},
		{
			trend: '#SeninBarokah',
			tweets: 87.2
		}
	]
};

const NFTtrendings = {
	title: 'NFT Trending',
	data: [
		{
			trend: '#Texos',
			tweets: 122.7
		}
	]
};

const FootballTrendings = {
	title: 'Football Trending',
	data: [
		{
			trend: '#MUFC',
			tweets: 97.2
		},
		{
			trend: '#Rangnick',
			tweets: 77.2
		},
		{
			trend: '#ThxOle',
			tweets: 54.2
		}
	]
};

export const Trends = () => {
	return (
		<div className='trends__container'>
			<div className='trends__header'>
				<span>Trend for you</span>
				<img
					className='trends__setting-icon'
					src={SettingIcon}
					alt='settingIcon'
				/>
			</div>
			<ul className='trends__list'>
				<h1 className='trends__item-header'>
					{trendsInIndonesia.title}
				</h1>
				{trendsInIndonesia.data.map((element, i) => {
					return (
						<li
							key={i}
							className='trends__item'
						>
							<div className='trends__item-container'>
								<span>{element.trend}</span>
								<img
									className='trends__item-dots'
									src={Dots}
									alt=''
								/>
							</div>
							<span className='trends__item-tweets'>
								{element.tweets}k Tweets
							</span>
						</li>
					);
				})}
			</ul>
			<ul>
				<h1 className='trends__item-header'>{NFTtrendings.title}</h1>
				{NFTtrendings.data.map((element, i) => {
					return (
						<li
							key={i}
							className='trends__item'
						>
							<div className='trends__item-container'>
								<span>{element.trend}</span>
								<img
									className='trends__item-dots'
									src={Dots}
									alt=''
								/>
							</div>
							<span className='trends__item-tweets'>
								{element.tweets}k Tweets
							</span>
						</li>
					);
				})}
			</ul>
			<ul>
				<h1 className='trends__item-header'>
					{FootballTrendings.title}
				</h1>
				{FootballTrendings.data.map((element, i) => {
					return (
						<li
							key={i}
							className='trends__item'
						>
							<div className='trends__item-container'>
								<span>{element.trend}</span>
								<img
									className='trends__item-dots'
									src={Dots}
									alt=''
								/>
							</div>
							<span className='trends__item-tweets'>
								{element.tweets}k Tweets
							</span>
						</li>
					);
				})}
			</ul>
			<div className='trends__footer'>
				<button className='trends__footer-btn'>Show more</button>
			</div>
		</div>
	);
};

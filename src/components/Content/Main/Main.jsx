import React from 'react';
import './Main.css';
import { NewPostField } from './subcomponents/NewPostField';
import { Post } from './subcomponents/Post';

const posts = [
	{
		name: 'Elon Musk',
		username: '@elonmusk',
		avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/548px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
		text: `Let's set an age limit after which you can't run for political office,
        perhaps a number just below 70 ...`
	},
	{
		name: 'HYPERBEAST',
		username: '@HYPEBEAST',
		avatar: 'https://preview.redd.it/hyperbeast-triptych-3888x1728-v0-5vxrhyzn6vi81.jpg?width=1080&crop=smart&auto=webp&v=enabled&s=03fbd7282fffd3f6d696242e573c3431d25c60f7',
		text: 'Sole Mates: Ralph Suguitan and the Nike KD 4 "Easter"',
		image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg.webp'
	},
	{
		name: 'Pavel Durov',
		username: '@paveldur',
		avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/548px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg',
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
	}
];

export const Main = () => {
	return (
		<div className='main__container'>
			<NewPostField />
			{Object.values(posts).map((el, i) => {
				return (
					<Post
						{...el}
						key={i}
					/>
				);
			})}
		</div>
	);
};

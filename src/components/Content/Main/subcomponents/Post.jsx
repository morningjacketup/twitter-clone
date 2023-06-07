import React from 'react';
import Dots from '../../../../assets/dots-3.svg';
import Heart from '../../../../assets/heart.svg';
import Retweet from '../../../../assets/retweet.svg';
import Comment from '../../../../assets/comment.svg';
import Export from '../../../../assets/export.svg';
import Verified from '../../../../assets/verified.svg';
import './Post.css';

export const Post = (props) => {
	return (
		<div
			className='post__bg'
			key={props.i}
		>
			<div className='post__aside'>
				<img
					className='post__avatar'
					src={props.avatar}
					alt='avatar'
				/>
			</div>
			<div className='post__main'>
				<div className='post__header'>
					<div className='post__user'>
						<span>{props.name}</span>
						<img
							className='post__user-verified'
							src={Verified}
							alt='verified icon'
						/>
						<span>{props.username}</span>
					</div>
					<img
						className='post__dots'
						src={Dots}
						alt='settings'
					/>
				</div>
				<div className='post__text'>
					<p>{props.text}</p>
					{props.image ? (
						<img
							className='post__text-image'
							src={props.image}
							alt='img'
						/>
					) : null}
				</div>
				<div className='post__likes-container'>
					<div className='post__likes'>
						<img
							className='post__likes-icon'
							src={Heart}
							alt='like icon'
						/>
						<img
							className='post__retweet-icon'
							src={Retweet}
							alt='retweet icon'
						/>
						<img
							className='post__export-icon'
							src={Export}
							alt='export icon'
						/>
						241k
					</div>
					<span className='post__likes-comments'>45 comments</span>
				</div>
				<div className='post__likes_buttons'>
					<button className='post__likes-btn'>
						<div className='post__btn-container'>
							<img
								className='post__btn-icon'
								src={Heart}
								alt='like icon'
							/>
							Like
						</div>
					</button>
					<button className='post__likes-btn'>
						<div className='post__btn-container'>
							<img
								className='post__btn-icon'
								src={Retweet}
								alt='retweet icon'
							/>
							Retweet
						</div>
					</button>
					<button className='post__likes-btn'>
						<div className='post__btn-container'>
							<img
								className='post__btn-icon'
								src={Comment}
								alt='comment icon'
							/>
							Comment
						</div>
					</button>
					<button className='post__likes-btn-export'>
						<img
							className='post__btn-icon'
							src={Export}
							alt='export icon'
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

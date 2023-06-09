import React from 'react';
import Dots from '../../../../assets/dots-3.svg';
import Heart from '../../../../assets/heart.svg';
import Retweet from '../../../../assets/retweet.svg';
import Comment from '../../../../assets/comment.svg';
import Export from '../../../../assets/export.svg';
import Verified from '../../../../assets/verified.svg';
import './Post.css';

export const Post = (props) => {
	const time = Date.parse(props.publishDate);
	const date = new Date(time);
	return (
		<div className='post__bg'>
			<div className='post__aside'>
				<img
					className='post__avatar'
					src={props.owner.picture ? props.owner.picture : ''}
					alt='avatar'
				/>
			</div>
			<div className='post__main'>
				<div className='post__header'>
					<div className='post__user'>
						<span>
							{props.owner.firstName ? props.owner.firstName : ''}
						</span>
						<img
							className='post__user-verified'
							src={Verified}
							alt='verified icon'
						/>
						<span className='post__user-username'>
							@{props.owner.lastName ? props.owner.lastName : ''}
						</span>
					</div>
					<img
						className='post__dots'
						src={Dots}
						alt='settings'
					/>
				</div>
				<div className='post__header_time'>
					{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
				</div>
				<div className='post__text'>
					<p>{props.text ? props.text : ''}</p>
					{props.image ? (
						<img
							className='post__text-image'
							src={props.image ? props.image : ''}
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
						{props.likes}k Tweets
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

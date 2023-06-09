import React from 'react';
import './NewPostField.css';
import Gallery from '../../../../assets/gallery.svg';
import PlayButton from '../../../../assets/play-button.svg';
import ThreadIcon from '../../../../assets/list-add.svg';
import CalendarIcon from '../../../../assets/calendar.svg';
import { useSelector } from 'react-redux';

export const NewPostField = () => {
	const { picture } = useSelector((state) => state.user.user);

	return (
		<div className='post__field-bg'>
			<div className='post__field_aside'>
				<img
					className='post__field-avatar'
					src={picture}
					alt='avatar'
				/>
			</div>
			<div className='post__field_main'>
				<input
					className='post__field-input'
					placeholder={`What's happening?`}
				/>
				<div className='post__field-btns'>
					<button className='post__field-btn'>
						<img
							className='post__field-btn-icon'
							src={Gallery}
							alt='gallery icon'
						/>
						Photo
					</button>
					<button className='post__field-btn'>
						<img
							className='post__field-btn-icon'
							src={PlayButton}
							alt='play icon'
						/>
						Video
					</button>
					<button className='post__field-btn'>
						<img
							className='post__field-btn-icon'
							src={ThreadIcon}
							alt='thread icon'
						/>
						Thread
					</button>
					<button className='post__field-btn'>
						<img
							className='post__field-btn-icon'
							src={CalendarIcon}
							alt='calendar icon'
						/>
						Schedule
					</button>
				</div>
			</div>
		</div>
	);
};

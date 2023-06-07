import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/user/slice';

export const Login = () => {
	const dispatch = useDispatch();

	return (
		<div className='login__bg'>
			<input />
			<input />
			<Link to='/main'>
				<button
					onClick={async () => {
						const res = await (
							await fetch(
								'https://dummyapi.io/data/v1/user?limit=10',
								{
									headers: {
										'app-id': '6480293687c6130d3d3f302f'
									}
								}
							)
						).json();
						dispatch(setUser(res.data[0]));
					}}
				>
					Login
				</button>
			</Link>
		</div>
	);
};

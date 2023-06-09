import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../store/user/thunk';

export const Login = () => {
	const dispatch = useDispatch();
	const router = useNavigate();

	const login = async () => {
		dispatch(loginThunk());
		router('/home');
	};

	return (
		<div className='login__bg'>
			<input
				className='login__input'
				placeholder='login'
			/>
			<input
				className='login__input'
				placeholder='password'
			/>
			<button
				className='login__submit'
				onClick={login}
			>
				Login
			</button>
		</div>
	);
};

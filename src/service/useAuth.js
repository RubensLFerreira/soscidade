import api from './baseApi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
			setAuthenticated(true);
		}

		setLoading(false);
	}, []);

	async function login(login, senha) {
		try {
			const response = await api.post('/login', { login, senha });
			await authUsuario(response.data);

			localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
			localStorage.setItem('token', JSON.stringify(response.data.token));

			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	async function authUsuario(data) {
		setAuthenticated(true);
		localStorage.setItem('token', JSON.stringify(data.token));
		navigate('/denunciar');
	}

	async function logout() {
		setAuthenticated(false);
		localStorage.removeItem('token');
		api.defaults.headers.Authorization = undefined;
		navigate('/');
		window.location.reload();
	}

	return { authenticated, loading, login, logout };
}

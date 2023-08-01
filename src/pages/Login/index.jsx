import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Context } from '../../context/UserContext';

import { Grid, Typography, Alert, Stack, IconButton } from '@mui/material';
import { StyledBox, StyledTextField1, StyledButton } from './StyledLogin';

import { LogoVertical } from '../../components/Logos/LogoVertical';
import { BsArrowLeftSquare } from 'react-icons/bs';

import EscolherCadastro from '../../components/Login/EscolherCadastro';

export default function Login() {
	const navigate = useNavigate();

	const { login } = useContext(Context);
	const [usuario, setUsuario] = useState('');
	const [alert, setAlert] = useState(false);

	const handleChange = (e) => {
		setUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setAlert(true);

			// await login(usuario.login, usuario.senha);

			setTimeout(() => {
				login(usuario.login, usuario.senha);
				setAlert(false);
			}, 1000);

			console.log('Logado com sucesso!');

			setAlert(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<StyledBox>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={1}>
						<Link to={`/`}>
							<IconButton aria-label="delete" className="button-voltar-login">
								<BsArrowLeftSquare />
							</IconButton>
						</Link>
					</Grid>
					<Grid item xs={12}>
						<LogoVertical />
					</Grid>
					<Grid item xs={12}>
						<StyledTextField1
							text="Login"
							type="text"
							name="login"
							placeholder="Digite o login"
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<StyledTextField1
							text="Senha"
							type="password"
							name="senha"
							placeholder="Digite a senha"
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<StyledButton input type="submit" value="Entrar">
							Entrar
						</StyledButton>
					</Grid>
					<Grid item xs={12}>
						<Typography>Não possui conta?</Typography>
						<EscolherCadastro />
					</Grid>
				</Grid>
			</form>
			{alert && (
				<Stack sx={{ width: '300px', margin: 'auto auto' }} spacing={2}>
					<Alert variant="filled" severity="success">
						Usuário logado com sucesso!
					</Alert>
				</Stack>
			)}
		</StyledBox>
	);
}

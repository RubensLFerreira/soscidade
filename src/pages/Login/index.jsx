import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context/UserContext';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { LogoVertical } from '../../components/Logos/LogoVertical';

import { Grid, Typography, Alert, Stack } from '@mui/material';
import {
	StyledBox,
	StyledTextField1,
	StyledButton,
	StyledButton2,
	StyledAlert,
	Container,
} from './StyledLogin';

import EscolherCadastro from '../../components/Login/EscolherCadastro';

const schema = yup
	.object({
		login: yup
			.string()
			.required('Login é obrigatório!')
			.min(3, 'No mínimo 3 caracteres'),
		senha: yup
			.string()
			.typeError('Tipo de dado inválido!')
			.required('Senha é obrigatória!')
			.min(3, 'No mínimo 3 caracteres!')
			.max(10, 'No máximo 10 caracteres!'),
	})
	.required();

export default function Login() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const { login } = useContext(Context);
	const [alert, setAlert] = useState(false);

	const handleOnSubmit = async (data) => {
		try {
			setAlert(true);

			await login(data.login, data.senha);

			console.log(watch(data));

			setTimeout(() => {
				setAlert(false);
			}, 1000);

			console.log('Logado com sucesso!');
			setAlert(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<StyledBox>
				<form onSubmit={handleSubmit(handleOnSubmit)}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<LogoVertical />
						</Grid>
						<Grid item xs={12}>
							<StyledTextField1
								text="Login"
								type="text"
								name="login"
								placeholder="Digite o login"
								{...register('login')}
							/>
							<StyledAlert>{errors.login?.message}</StyledAlert>
						</Grid>
						<Grid item xs={12}>
							<StyledTextField1
								text="Senha"
								type="password"
								name="senha"
								placeholder="Digite a senha"
								{...register('senha')}
							/>
							<StyledAlert>{errors.senha?.message}</StyledAlert>
						</Grid>
						<Grid item xs={12}>
							<StyledButton input type="submit" value="Entrar">
								Entrar
							</StyledButton>
						</Grid>

						<Grid item xs={12}>
							<Link to={`/`}>
								<StyledButton2 variant="outlined">Cancelar</StyledButton2>
							</Link>
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
		</Container>
	);
}

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { cadastrarPrefeitura } from '../../../service/prefeituraService';

import { Alert, Stack, Grid } from '@mui/material';

import {
	StyledBox,
	StyledButton,
	StyledButton2,
	StyledTextField1,
	StyledTypography,
	StyledTypography2,
	StyledAlert,
	Container,
} from './StyledPrefeitura';

const schema = yup
	.object({
		nome: yup
			.string()
			.required('Nome é obrigatório!')
			.min(3, 'No mínimo 3 caracteres'),
		telefone: yup
			.string()
			.required('Telefone é obrigatório!')
			.min(3, 'No mínimo 3 caracteres')
			.max(11, 'No máximo 11 caracteres'),
		email: yup.string().required('E-mail é obrigatório!'),
		prefeito: yup
			.string()
			.required('Nome do prefeito é obrigatório!')
			.min(3, 'No mínimo 3 caracteres'),
		site: yup.string().required('Site é obrigatório!'),
		login: yup
			.string()
			.required('Login é obrigatório!')
			.min(3, 'No mínimo 3 caracteres'),
		senha: yup
			.string()
			.typeError('Tipo de dado inválido!')
			.required('Senha é obrigatória!')
			.min(3, 'No mínimo 3 caracteres!'),
	})
	.required();

export default function FormRegisterPrefeitura() {
	const [alert, setAlert] = useState(false);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleOnSubmit = async (data) => {
		try {
			setAlert(true);

			await cadastrarPrefeitura(
				data.nome,
				data.telefone,
				data.email,
				data.prefeito,
				data.site,
				data.login,
				data.senha
			);

			console.log(watch(data));

			setTimeout(() => {
				setAlert(false);
			}, 1000);

			console.log('cadastrado com sucesso!');
			setAlert(true);
			navigate('/login');
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
							<StyledTypography>Cadastrar Prefeitura</StyledTypography>
						</Grid>

						<Grid item xs={12}>
							<StyledTextField1
								label="Nome"
								variant="standard"
								type="text"
								placeholder="Digite seu nome"
								{...register('nome')}
							/>
							<StyledAlert>{errors.nome?.message}</StyledAlert>
						</Grid>

						<Grid item xs={12}>
							<StyledTextField1
								label="Telefone"
								variant="standard"
								type="text"
								placeholder="Digite seu telefone"
								{...register('telefone')}
							/>
							<StyledAlert>{errors.telefone?.message}</StyledAlert>
						</Grid>

						<Grid item xs={12}>
							<StyledTextField1
								label="Email"
								variant="standard"
								type="text"
								placeholder="Digite seu email"
								{...register('email')}
							/>
							<StyledAlert>{errors.email?.message}</StyledAlert>
						</Grid>

						<Grid item xs={12}>
							<StyledTextField1
								label="Prefeito"
								variant="standard"
								type="text"
								placeholder="Digite seu prefeito"
								{...register('prefeito')}
							/>
							<StyledAlert>{errors.prefeito?.message}</StyledAlert>
						</Grid>

						<Grid item xs={12}>
							<StyledTextField1
								label="Site"
								variant="standard"
								type="text"
								placeholder="Digite seu site"
								{...register('site')}
							/>
							<StyledAlert>{errors.site?.message}</StyledAlert>
						</Grid>

						<Grid item xs={12}>
							<StyledTextField1
								label="Login"
								variant="standard"
								type="text"
								placeholder="Digite seu login"
								{...register('login')}
							/>
							<StyledAlert>{errors.login?.message}</StyledAlert>
						</Grid>

						<Grid item xs={12}>
							<StyledTextField1
								label="Senha"
								variant="standard"
								type="password"
								placeholder="Digite sua senha"
								{...register('senha')}
							/>
							<StyledAlert>{errors.senha?.message}</StyledAlert>
						</Grid>

						<Grid item xs={12}>
							<StyledButton variant="contained" input type="submit">
								Cadastrar
							</StyledButton>
						</Grid>

						<Grid item xs={12}>
							<Link to={`/`}>
								<StyledButton2 variant="outlined">Cancelar</StyledButton2>
							</Link>
						</Grid>

						<Grid item xs={12}>
							<StyledTypography2>
								Possui conta? <Link to={`/Login`}>Login</Link>
							</StyledTypography2>
						</Grid>
					</Grid>
				</form>
				{alert && (
					<Stack sx={{ width: '300px', marginLeft: '1rem' }} spacing={2}>
						<Alert variant="filled" severity="success">
							Prefeitura cadastrada com sucesso!
						</Alert>
					</Stack>
				)}
			</StyledBox>
		</Container>
	);
}

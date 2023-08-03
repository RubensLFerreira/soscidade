import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { cadastrarCidadao } from '../../../service/cidadaoService';

import { Alert, Stack, Grid, IconButton } from '@mui/material';
import { BsArrowLeftSquare } from 'react-icons/bs';

import {
	StyledBox,
	StyledButton,
	StyledTextField1,
	StyledTypography,
	StyledTypography2,
	StyledAlert,
} from './StyledCidadao';

const schema = yup
	.object({
		nome: yup
			.string()
			.required('Nome é obrigatório!')
			.min(3, 'No mínimo 3 caracteres'),
		cpf: yup
			.string()
			.required('CPF é obrigatório!')
			.min(11, 'No mínimo 3 caracteres')
			.max(11, 'No máximo 11 caracteres'),
		telefone: yup
			.string()
			.required('Telefone é obrigatório!')
			.min(3, 'No mínimo 3 caracteres')
			.max(11, 'No máximo 11 caracteres'),
		email: yup.string().required('E-mail é obrigatório!'),
		sexo: yup.string().required('Sexo é obrigatório!').max(1, 'Apenas M ou F'),
		nascimento: yup.string().required('Data de nascimento é obrigatória!'),
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

export default function FormRegister() {
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

			await cadastrarCidadao(
				data.nome,
				data.cpf,
				data.sexo,
				data.nascimento,
				data.telefone,
				data.email,
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
		<StyledBox>
			<form onSubmit={handleSubmit(handleOnSubmit)}>
				<Grid container spacing={2}>
					<Grid item xs={1}>
						<Link to={`/login`}>
							<IconButton aria-label="back" className="button-voltar-login">
								<BsArrowLeftSquare />
							</IconButton>
						</Link>
					</Grid>

					<Grid item xs={12}>
						<StyledTypography>Cadastrar cidadão</StyledTypography>
					</Grid>

					<Grid item xs={12}>
						<StyledTextField1
							label="Nome"
							variant="standard"
							type="text"
							name="nome"
							placeholder="Digite seu nome"
							{...register('nome')}
						/>
						<StyledAlert>{errors.nome?.message}</StyledAlert>
					</Grid>

					<Grid item xs={12}>
						<StyledTextField1
							label="Telefone"
							variant="standard"
							type="tel"
							name="telefone"
							placeholder="Digite seu telefone"
							{...register('telefone')}
						/>
						<StyledAlert>{errors.telefone?.message}</StyledAlert>
					</Grid>

					<Grid item xs={12}>
						<StyledTextField1
							label="Email"
							variant="standard"
							type="email"
							name="email"
							placeholder="Digite seu email"
							{...register('email')}
						/>
						<StyledAlert>{errors.email?.message}</StyledAlert>
					</Grid>

					<Grid item xs={12}>
						<StyledTextField1
							label="CPF"
							variant="standard"
							type="text"
							name="cpf"
							placeholder="Digite seu cpf"
							{...register('cpf')}
						/>
						<StyledAlert>{errors.cpf?.message}</StyledAlert>
					</Grid>

					<Grid item xs={12}>
						<StyledTextField1
							label="Sexo"
							variant="standard"
							type="text"
							name="sexo"
							placeholder="Digite seu sexo"
							{...register('sexo')}
						/>
						<StyledAlert>{errors.sexo?.message}</StyledAlert>
					</Grid>

					<Grid item xs={12}>
						<StyledTextField1
							variant="standard"
							type="date"
							name="nascimento"
							placeholder="Digite seu nascimento"
							{...register('nascimento')}
						/>
						<StyledAlert>{errors.nascimento?.message}</StyledAlert>
					</Grid>

					<Grid item xs={12}>
						<StyledTextField1
							label="Login"
							variant="standard"
							type="text"
							name="login"
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
							name="senha"
							placeholder="Digite sua senha"
							{...register('senha')}
						/>
						<StyledAlert>{errors.senha?.message}</StyledAlert>
					</Grid>

					<Grid item xs={12}>
						<StyledButton
							variant="contained"
							input
							type="submit"
						>
							Cadastrar
						</StyledButton>
					</Grid>

					<Grid item xs={12}>
						<StyledTypography2>
							Possui conta? <Link to={`/Login`}>Login</Link>
						</StyledTypography2>
					</Grid>
				</Grid>
			</form>
			{alert && (
				<Stack sx={{ width: '300px', margin: 'auto auto' }} spacing={2}>
					<Alert variant="filled" severity="success">
						Prefeitura cadastrada com sucesso!
					</Alert>
				</Stack>
			)}
		</StyledBox>
	);
}

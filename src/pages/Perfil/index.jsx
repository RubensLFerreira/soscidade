import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import jwt_decode from 'jwt-decode';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import {
	Alert,
	Stack,
	Grid,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
} from '@mui/material';

import {
	StyledBox,
	StyledButton,
	StyledButton2,
	StyledTextField1,
	StyledTypography,
	StyledTypography2,
	StyledAlert,
	StyledTextField2,
	StyledContainer,
	StyledTypography1,
} from './StyledPerfil';

import { editarCidadao } from '../../service/cidadaoService';
import { todosCidadaos } from '../../service/cidadaoService';

const schema = yup
	.object({
		nome: yup
			.string()
			.required('Nome é obrigatório!')
			.min(3, 'No mínimo 3 caracteres'),
		cpf: yup
			.string()
			.required('CPF é obrigatório!')
			.min(11, 'No mínimo 11 caracteres')
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

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Perfil() {
	const [usuarioId, setUsuarioId] = useState(null);
	const [nomeUsuario, setNomeUsuario] = useState(null);
	const [cidadaos, setCidadaos] = useState([]);

	const [alert, setAlert] = useState(false);
	const [alert2, setAlert2] = useState(false);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		const carregarCidadao = async () => {
			try {
				const resposta = await todosCidadaos();
				setCidadaos(resposta.cidadaos);
			} catch (error) {
				console.error(error);
				throw new Error('Erro ao buscar todos cidadãos');
			}
		};
		carregarCidadao();
	}, []);

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			const decodedToken = jwt_decode(token);
			const userId = decodedToken.id;
			const userNome = decodedToken.nome;

			setNomeUsuario(userNome);
			setUsuarioId(userId);
		}
	}, []);

	let id;

	const cidadao = cidadaos.find(
		(cidadaos) => cidadaos.usuario_id === usuarioId
	);

	if (cidadao) {
		id = cidadao.id;
	}

	const handleOnSubmit = async (data) => {
		try {
			const cidadaoData = {
				nome: data.nome,
				cpf: data.cpf,
				sexo: data.sexo,
				nascimento: data.nascimento,
				telefone: data.telefone,
				email: data.email,
				login: data.login,
				senha: data.senha,
				usuarioId: usuarioId,
			};

			const cidadaoId = id;

			const isValid = await editarCidadao(cidadaoData, cidadaoId);

			if (isValid) {
				console.log('Informações atualizadas!');
				setAlert(true);
				setTimeout(() => {
					setAlert(false);
					navigate('/denunciar');
				}, 1000);
			} else {
				setAlert2(true);
				setTimeout(() => {
					setAlert2(false);
				}, 1000);
			}
		} catch (error) {
			console.error(error);
			throw new Error('Erro ao editar cidadão');
		}
	};

	return (
		<>
			<Navbar />

			<StyledBox>
				<StyledContainer>
					<form onSubmit={handleSubmit(handleOnSubmit)}>
						<Grid container spacing={2}>
							{alert && (
								<Stack sx={{ width: '300px', margin: 'auto auto' }} spacing={2}>
									<Alert variant="filled" severity="success">
										usuário atualziado com sucesso!
									</Alert>
								</Stack>
							)}

							{alert2 && (
								<Stack sx={{ width: '300px', margin: 'auto auto' }} spacing={2}>
									<Alert variant="filled" severity="error">
										Erro ao atualizar!
									</Alert>
								</Stack>
							)}
							<Grid item xs={12} style={{ textAlign: 'center' }}>
								<StyledTypography1>Bem-vindo! {nomeUsuario}</StyledTypography1>
							</Grid>

							<Grid item xs={8}>
								<StyledTextField1
									label="Nome"
									variant="standard"
									type="text"
									name="nome"
									placeholder="Digite seu nome"
									size="small"
									{...register('nome')}
								/>
								<StyledAlert>{errors.nome?.message}</StyledAlert>
							</Grid>

							<Grid item xs={4}>
								<StyledTextField1
									label="Telefone"
									variant="standard"
									type="tel"
									name="telefone"
									placeholder="Digite seu telefone"
									size="small"
									{...register('telefone')}
								/>
								<StyledAlert>{errors.telefone?.message}</StyledAlert>
							</Grid>

							<Grid item xs={6}>
								<StyledTextField1
									label="Email"
									variant="standard"
									type="email"
									name="email"
									placeholder="Digite seu email"
									size="small"
									{...register('email')}
								/>
								<StyledAlert>{errors.email?.message}</StyledAlert>
							</Grid>

							<Grid item xs={6}>
								<StyledTextField1
									label="CPF"
									variant="standard"
									type="text"
									name="cpf"
									placeholder="Digite seu cpf"
									size="small"
									{...register('cpf')}
								/>
								<StyledAlert>{errors.cpf?.message}</StyledAlert>
							</Grid>

							<Grid item xs={6}>
								<FormControl fullWidth>
									<InputLabel
										id="demo-simple-select-label"
										style={{ marginLeft: '-.8rem' }}
									>
										Sexo
									</InputLabel>
									<StyledTextField2
										id="demo-simple-select"
										name="sexo"
										label="Sexo"
										labelId="demo-simple-select-label"
										variant="standard"
										size="small"
										{...register('sexo')}
									>
										<MenuItem value={1}>Masculino</MenuItem>
										<MenuItem value={2}>Feminino</MenuItem>
									</StyledTextField2>
								</FormControl>
								<StyledAlert>{errors.sexo?.message}</StyledAlert>
							</Grid>

							<Grid item xs={6}>
								<StyledTextField1
									variant="standard"
									type="date"
									name="nascimento"
									placeholder="Digite seu nascimento"
									style={{ marginTop: '.8rem' }}
									{...register('nascimento')}
								/>
								<StyledAlert>{errors.nascimento?.message}</StyledAlert>
							</Grid>

							<Grid item xs={6}>
								<StyledTextField1
									label="Login"
									variant="standard"
									type="text"
									name="login"
									placeholder="Digite seu login"
									size="small"
									{...register('login')}
								/>
								<StyledAlert>{errors.login?.message}</StyledAlert>
							</Grid>

							<Grid item xs={6}>
								<StyledTextField1
									label="Senha"
									variant="standard"
									type="password"
									name="senha"
									placeholder="Digite sua senha"
									size="small"
									{...register('senha')}
								/>
								<StyledAlert>{errors.senha?.message}</StyledAlert>
							</Grid>

							<Grid
								item
								xs={6}
								style={{ textAlign: 'center', marginTop: '3rem' }}
							>
								<Link to={`/`}>
									<StyledButton2 variant="outlined">Cancelar</StyledButton2>
								</Link>
							</Grid>

							<Grid
								item
								xs={6}
								style={{ textAlign: 'center', marginTop: '3rem' }}
							>
								<StyledButton variant="contained" type="submit">
									Atualizar
								</StyledButton>
							</Grid>
						</Grid>
					</form>
				</StyledContainer>
			</StyledBox>

			<Footer />
		</>
	);
}

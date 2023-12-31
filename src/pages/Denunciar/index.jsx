import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Context } from '../../context/UserContext';
import Dropzone from 'react-dropzone';

import {
	Alert,
	Stack,
	Grid,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	TextField,
	Button,
} from '@mui/material';

import {
	Iluminacao,
	Avenida,
	Lixo,
	Saneamento,
	Sinalizacao,
	Outros,
} from '../../components/Denunciar';

import {
	StyledBox,
	StyledGrid,
	StyledTypography1,
	StyledTypography2,
	StyledTextField1,
	StyledButton,
	StyledAlert,
	StyledTextField3,
} from './StyledDenunciar';

const schema = yup
	.object({
		observacao: yup.string().required('E-mail é obrigatório!'),
		cidade: yup.string().required('E-mail é obrigatório!'),
		uf: yup.string().required('E-mail é obrigatório!'),
		rua: yup.string().required('E-mail é obrigatório!'),
		bairro: yup.string().required('E-mail é obrigatório!'),
	})
	.required();

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { cadastrarProblema } from '../../service/problemasService';
import { todasPrefeituras } from '../../service/prefeituraService';

export default function Denunciar() {
	const navigate = useNavigate();
	const [alert, setAlert] = useState(false);
	const [alert2, setAlert2] = useState(false);
	const [selectedImages, setSelectedImages] = useState([]);
	const [categoria, setCategoria] = useState('1');
	const [userId, setUserId] = useState(null);
	const [opcoes, setOpcoes] = useState([]);
	const [opcaoId, setOpcaoId] = useState('');
	const [ufs, setUfs] = useState([]);
	const [cities, setCities] = useState([]);
	const [selectedUf, setSelectedUf] = useState('0');
	const [selectedCity, setSelectedCity] = useState('0');

	const { authenticated } = useContext(Context);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			const decodedToken = jwt_decode(token);
			const userId = decodedToken.id;

			setUserId(userId);
		}
	}, []);

	useEffect(() => {
		const CarregarPrefeituras = async () => {
			try {
				const response = await todasPrefeituras();
				setOpcoes(response.prefeituras);
			} catch (error) {
				console.error(error);
			}
		};
		CarregarPrefeituras();
	}, []);

	useEffect(() => {
		if (selectedUf === '0') {
			return;
		}
		axios
			.get(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
			)
			.then((response) => {
				setCities(response.data);
			});
	}, [selectedUf]);

	useEffect(() => {
		axios
			.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
			.then((response) => {
				setUfs(response.data);
			});
	}, []);

	function handleSelectUf(event) {
		const uf = event.target.value;
		setSelectedUf(uf);
		setSelectedCity('0');
	}

	function handleSelectCity(event) {
		const city = event.target.value;
		setSelectedCity(city);
	}

	const handleOptionChange = (event, value) => {
		if (value) {
			setOpcaoId(value ? value.id : '');
		} else {
			setOpcaoId('');
		}
		console.log(value.id);
	};

	const handleOnSubmit = async (data) => {
		try {
			const problemaData = {
				observacao: data.observacao,
				status: false,
				categoria: categoria,
				usuario: userId,
				prefeitura: opcaoId,
				latitude: '-23.563099',
				longitude: '-46.656571',
				rua: data.rua,
				bairro: data.bairro,
				cidade: selectedCity,
				uf: selectedUf,
				imagem: selectedImages,
			};

			const isValid = await cadastrarProblema(problemaData);

			if (isValid) {
				console.log('Denúncia enviada!');
				setTimeout(() => {
					setAlert(false);
					navigate('/usuario/dashboard');
				}, 1000);
			} else {
				setTimeout(() => {
					setAlert2(false);
				}, 1000);

				setAlert2(true);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Navbar />
			<StyledBox>
				<form onSubmit={handleSubmit(handleOnSubmit)}>
					<StyledTypography1>
						Reportar problema de infraestrutura
					</StyledTypography1>

					<StyledGrid>
						<StyledTypography2>Título do problema</StyledTypography2>
						<StyledTextField1
							placeholder="Ex: Falta de iluminação na rua ABC"
							variant="outlined"
							{...register('observacao')}
						/>
						<StyledAlert>{errors.observacao?.message}</StyledAlert>
					</StyledGrid>

					<StyledGrid>
						<StyledTypography2>Enviar fotos</StyledTypography2>
						<Dropzone
							onDrop={(acceptedFiles) =>
								setSelectedImages([...selectedImages, ...acceptedFiles])
							}
							accept="image/*"
							multiple
						>
							{({ getRootProps, getInputProps }) => (
								<div
									{...getRootProps()}
									style={{
										border: '2px dashed #849afc',
										padding: '20px',
										backgroundColor: '#EAF3FF',
										cursor: 'pointer',
										textAlign: 'center',
										height: '200px',
										justifyContent: 'center',
										alignItems: 'center',
										display: 'flex',
										margin: '0 auto 3rem auto',
									}}
								>
									<input {...getInputProps()} />
									<p>
										Arraste e solte as imagens aqui, ou clique para selecionar
									</p>
								</div>
							)}
						</Dropzone>

						<div
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								display: 'flex',
								margin: 'auto auto',
								textAlign: 'center',
							}}
						>
							{selectedImages.map((image, index) => (
								<div
									key={index}
									style={{ maxWidth: '100%', margin: '0 auto 0 auto' }}
								>
									<img
										src={URL.createObjectURL(image)}
										alt={`Preview ${index}`}
										style={{ maxWidth: '10rem', maxHeight: '10rem' }}
									/>
								</div>
							))}
						</div>
					</StyledGrid>

					<StyledGrid>
						<StyledTypography2>Categoria do problema</StyledTypography2>
						<FormControl component="fieldset">
							<RadioGroup
								row
								name="categoria"
								value={categoria}
								onChange={(e) => setCategoria(e.target.value)}
							>
								<FormControlLabel
									labelPlacement="top"
									value={1}
									control={<Radio size="small" />}
									label={
										<div>
											<Iluminacao />
										</div>
									}
								/>
								<FormControlLabel
									labelPlacement="top"
									value={2}
									control={<Radio size="small" />}
									label={
										<div>
											<Avenida />
										</div>
									}
								/>
								<FormControlLabel
									labelPlacement="top"
									value={3}
									control={<Radio size="small" />}
									label={
										<div>
											<Lixo />
										</div>
									}
								/>

								<FormControlLabel
									labelPlacement="top"
									value={4}
									control={<Radio size="small" />}
									label={
										<div>
											<Saneamento />
										</div>
									}
								/>

								<FormControlLabel
									labelPlacement="top"
									value={5}
									control={<Radio size="small" />}
									label={
										<div>
											<Sinalizacao />
										</div>
									}
								/>
								<FormControlLabel
									labelPlacement="top"
									value={6}
									control={<Radio size="small" />}
									label={
										<div>
											<Outros />
										</div>
									}
								/>
							</RadioGroup>
						</FormControl>
					</StyledGrid>

					<StyledGrid>
						<StyledTypography2>Endereço</StyledTypography2>
						<Grid container spacing={1}>
							<Grid xs={7} item>
								<select
									name="City"
									id="City"
									value={selectedCity}
									{...register('cidade')}
									onChange={handleSelectCity}
									style={{
										width: '100%',
										height: '55px',
										backgroundColor: '#EAF3FF',
										border: '1px solid #cacaca',
										borderRadius: '5px',
										fontSize: '16px',
										color: '#4e4e4e',
									}}
								>
									<option value="0">Selecione uma cidade</option>
									{cities.map((city) => (
										<option key={city.id} value={city.nome}>
											{city.nome}
										</option>
									))}
								</select>
							</Grid>

							<Grid xs={5} item>
								<select
									name="uf"
									id="uf"
									value={selectedUf}
									{...register('uf')}
									onChange={handleSelectUf}
									style={{
										width: '100%',
										height: '55px',
										backgroundColor: '#EAF3FF',
										border: '1px solid #cacaca',
										borderRadius: '5px',
										fontSize: '16px',
										color: '#4e4e4e',
									}}
								>
									<option value="0">Selecione uma UF</option>
									{ufs.map((uf) => (
										<option key={uf.sigla} value={uf.sigla}>
											{uf.nome}
										</option>
									))}
								</select>
							</Grid>

							<Grid xs={6} item>
								<StyledTextField1
									label="Rua"
									placeholder="Ex: Rua ABC"
									variant="outlined"
									{...register('rua')}
								/>
								<StyledAlert>{errors.rua?.message}</StyledAlert>
							</Grid>

							<Grid xs={6} item>
								<StyledTextField1
									label="Bairro"
									placeholder="Ex: Bairro 123"
									variant="outlined"
									{...register('bairro')}
								/>
								<StyledAlert>{errors.bairro?.message}</StyledAlert>
							</Grid>
						</Grid>
					</StyledGrid>

					<StyledGrid>
						<StyledTypography2>Selecione a prefeitura</StyledTypography2>
						<Grid xs={12} item>
							<StyledTextField3
								id="combo-box-demo"
								options={opcoes}
								getOptionLabel={(option) => option.usuario.nome}
								onChange={handleOptionChange}
								renderInput={(params) => (
									<TextField {...params} label="Selecione uma opção" />
								)}
							/>
						</Grid>
					</StyledGrid>
					{authenticated ? (
						<StyledGrid>
							<StyledButton type="submit">Reportar problema</StyledButton>
						</StyledGrid>
					) : (
						<StyledGrid>
							<Button variant="contained" disabled>
								Login necessário
							</Button>
						</StyledGrid>
					)}
				</form>
				{alert && (
					<Stack sx={{ width: '100%', marginLeft: '1rem' }} spacing={2}>
						<Alert variant="filled" severity="success">
							Prefeitura cadastrada com sucesso!
						</Alert>
					</Stack>
				)}

				{alert2 && (
					<Stack sx={{ width: '100%', marginLeft: '1rem' }} spacing={2}>
						<Alert variant="filled" severity="error">
							Não foi possível cadastrar!
						</Alert>
					</Stack>
				)}
			</StyledBox>

			<Footer />
		</>
	);
}

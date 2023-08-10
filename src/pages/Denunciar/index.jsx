import { Grid } from '@mui/material/';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Stack } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Dropzone from 'react-dropzone';

import { cadastrarProblema } from '../../service/problemasService';

import {
	StyledBox,
	StyledGrid,
	StyledTypography1,
	StyledTypography2,
	StyledTextField1,
	StyledButton,
	StyledAlert,
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

export default function Denunciar() {
	const [alert, setAlert] = useState(false);
	const navigate = useNavigate();
	const [selectedImages, setSelectedImages] = useState([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function onFileChange(e) {
		console.log(Array.from(e.target.files));
		setUploadImage([...e.target.files]);
	}

	const handleOnSubmit = async (data) => {
		try {
			setAlert(true);

			const problemaData = {
				observacao: data.observacao,
				status: true,
				categoria: 1,
				cidadao: 9,
				prefeitura: 8,
				latitude: '-23.563099',
				longitude: '-46.656571',
				rua: data.rua,
				bairro: data.bairro,
				cidade: data.cidade,
				uf: data.uf,
				imagem: selectedImages,
			};

			await cadastrarProblema(problemaData);

			setTimeout(() => {
				setAlert(false);
			}, 1000);

			console.log('Problema relatado com sucesso!');
			setAlert(true);
			navigate('/denunciar');
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
							placeholder="Ex: Buraco na rua"
							variant="outlined"
							{...register('observacao')}
						/>
						<StyledAlert>{errors.observacao?.message}</StyledAlert>

						<StyledTypography2>Enviar fotos</StyledTypography2>
					</StyledGrid>
					{/* criar upload de imagens */}
					<Dropzone
						onDrop={(acceptedFiles) =>
							setSelectedImages([...selectedImages, ...acceptedFiles])
						}
						accept="image/*"
						multiple
					>
						{({ getRootProps, getInputProps }) => (
							<div
								className="dropzone-container"
								{...getRootProps()}
								style={{
									border: '2px dashed #cccccc',
									padding: '20px',
									backgroundColor: '#EAF3FF',
									cursor: 'pointer',
									textAlign: 'center',
									width: '95%',
									height: '200px',
									justifyContent: 'center',
									alignItems: 'center',
									display: 'flex',
									margin: 'auto auto',
								}}
							>
								<input {...getInputProps()} />
								<p>
									Arraste e solte as imagens aqui, ou clique para selecionar
								</p>
							</div>
						)}
					</Dropzone>

					<div style={{ display: 'flex', textAlign: 'center' }}>
						{selectedImages.map((image, index) => (
							<div
								key={index}
								style={{ maxWidth: '100%', margin: '1rem auto' }}
							>
								<img
									src={URL.createObjectURL(image)}
									alt={`Preview ${index}`}
									style={{ maxWidth: '80%', maxHeight: '80%' }}
								/>
							</div>
						))}
					</div>
					<StyledGrid>
						<StyledTypography2>Categoria do problema</StyledTypography2>
					</StyledGrid>
					{/* criar um radio chamado categoria com as opções de iluminação e infraestrutura com os valores 1 e 2 respectivamente */}
					<StyledGrid>
						<StyledTypography2>Endereço</StyledTypography2>

						<Grid container spacing={1}>
							<Grid xs={8} item>
								<StyledTextField1
									label="Cidade"
									placeholder="Ex: Cedro"
									variant="outlined"
									{...register('cidade')}
								/>
								<StyledAlert>{errors.cidade?.message}</StyledAlert>
							</Grid>

							<Grid xs={4} item>
								<StyledTextField1
									label="UF"
									placeholder="Ex: Ceará"
									variant="outlined"
									{...register('uf')}
								/>
								<StyledAlert>{errors.uf?.message}</StyledAlert>
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
						<StyledButton input type="submit">
							Reportar problema
						</StyledButton>
					</StyledGrid>
				</form>
				{alert && (
					<Stack sx={{ width: '300px', marginLeft: '1rem' }} spacing={2}>
						<Alert variant="filled" severity="success">
							Prefeitura cadastrada com sucesso!
						</Alert>
					</Stack>
				)}
			</StyledBox>
		</>
	);
}

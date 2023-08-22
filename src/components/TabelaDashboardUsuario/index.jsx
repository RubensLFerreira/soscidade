import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import {
	Table,
	Typography,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
	Modal,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Box,
} from '@mui/material';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';

import { todasPrefeituras } from '../../service/prefeituraService';
import { todosUsuarios } from '../../service/usuarioService';
import { todasDenunciasUsuario } from '../../service/problemasService';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 450,
	boxShadow: '2px 2px 6px black',
};

export default function TabelaDashBoardUsuario() {
	const handleClose = () => setOpen(false);
	const [openProblemaId, setOpenProblemaId] = useState(null);

	const handleOpenModal = (problemaId) => {
		setOpenProblemaId(problemaId);
	};

	const handleCloseModal = () => {
		setOpenProblemaId(null);
	};

	const [usuario, setUsuario] = useState([]);
	const [problema, setProblema] = useState();
	const [prefeitura, setPrefeitura] = useState([]);
	const [categorias, setCategorias] = useState([
		{ id: 1, nome: 'Iluminação' },
		{ id: 2, nome: 'Avenida' },
		{ id: 3, nome: 'Lixo' },
		{ id: 4, nome: 'Saneamento' },
		{ id: 5, nome: 'Sinalização' },
		{ id: 6, nome: 'Outros' },
	]);

	const imagemUrl = 'http://localhost:8080/imagem';

	useEffect(() => {
		const carregarUsuarios = async () => {
			const response = await todosUsuarios();
			setUsuario(response.usuarios);
		};
		carregarUsuarios();

		const CarregarPrefeituras = async () => {
			const response = await todasPrefeituras();
			setPrefeitura(response.prefeituras);
		};
		CarregarPrefeituras();
	}, []);

	// const getUsuario = (usuarioId) => {
	// 	const user = usuario.find((usr) => usr.id === usuarioId);
	// 	return user ? user.nome : 'usuário não encontrado';
	// };

	const getCategoria = (categoriaId) => {
		const categoria = categorias.find((cat) => cat.id === categoriaId);
		return categoria ? categoria.nome : 'Categoria não encontrada';
	};

	const getNomePrefeitura = (prefeituraId) => {
		const prefeituraEncontrada = prefeitura.find(
			(pref) => pref.id === prefeituraId
		);
		return prefeituraEncontrada
			? prefeituraEncontrada['usuario'].nome
			: 'Prefeitura não encontrada';
	};

	const token = localStorage.getItem('token');
	const decodedToken = jwtDecode(token);
	const idUsuario = decodedToken.id;

	useEffect(() => {
		const carregarDenuncias = async () => {
			try {
				const response = await todasDenunciasUsuario(idUsuario);
				setProblema(response.problemas);
			} catch (error) {
				console.log('Erro ao carregar denúncias do usuário:', error);
			}
		};
		carregarDenuncias();
	}, [idUsuario]);

	return (
		<>
			<Typography variant="h4" style={{ margin: '2rem 0' }}>
				Todas as suas denúncias <b>{decodedToken.nome}</b>!
			</Typography>
			<TableContainer
				style={{
					maxHeight: '400px',
					maxWidth: '100%',
					overflowY: 'auto',
					overflowX: 'auto',
				}}
				component={Paper}
			>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>id</TableCell>
							<TableCell>Categoria</TableCell>
							<TableCell>Prefeitura responsável</TableCell>
							<TableCell>Descrição</TableCell>
							<TableCell>Status</TableCell>
							<TableCell>Visualizar</TableCell>
							<TableCell>Alterar</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{problema &&
							problema.map((problema) => (
								<TableRow
									key={problema.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell>{problema.id}</TableCell>
									<TableCell>{getCategoria(problema.categoria_id)}</TableCell>
									<TableCell>
										{getNomePrefeitura(problema.prefeitura_id)}
									</TableCell>

									<TableCell>{problema.observacao}</TableCell>
									<TableCell>
										{problema.status ? (
											<DoneOutlineOutlinedIcon sx={{ color: 'green' }} />
										) : (
											<ReportGmailerrorredOutlinedIcon sx={{ color: 'red' }} />
										)}
									</TableCell>
									<TableCell>
										<Button onClick={() => handleOpenModal(problema.id)}>
											<RemoveRedEyeOutlinedIcon />
										</Button>

										<Modal
											open={openProblemaId === problema.id}
											onClose={handleCloseModal}
											aria-labelledby="modal-modal-title"
											aria-describedby="modal-modal-description"
											BackdropProps={{
												style: { backgroundColor: 'transparent' },
											}}
										>
											<Box sx={style}>
												<Card>
													<CardMedia
														sx={{
															height: 140,
															backgroundColor: '#333',
															color: 'white',
														}}
														image={`${imagemUrl}/${problema?.imagem[0]}`}
														title="green iguana"
													/>
													<CardContent>
														<Typography
															gutterBottom
															variant="h5"
															component="div"
														>
															{problema.observacao}
														</Typography>
														<Typography variant="body2" color="text.secondary">
															Categoria: {getCategoria(problema.categoria_id)}
														</Typography>
														<Typography variant="body2" color="text.secondary">
															Responsável:{' '}
															{getNomePrefeitura(problema.prefeitura_id)}
														</Typography>
														<Typography variant="body2" color="text.secondary">
															Status:{' '}
															{problema.status ? (
																<DoneOutlineOutlinedIcon
																	sx={{ color: 'green' }}
																/>
															) : (
																<ReportGmailerrorredOutlinedIcon
																	sx={{ color: 'red' }}
																/>
															)}
														</Typography>
													</CardContent>
													<CardActions>
														<Button size="small" onClick={handleCloseModal}>
															Cancelar
														</Button>
														<Link to="/editar/editar/:id?">
															<Button>Editar</Button>
														</Link>
													</CardActions>
												</Card>
											</Box>
										</Modal>
									</TableCell>
									<TableCell>
										<Link to="/editar/editar/:id?">
											<Button>
												<EditOutlinedIcon />
											</Button>
										</Link>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

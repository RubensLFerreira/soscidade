import { useState, useEffect } from 'react';
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
} from '@mui/material';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import { todosProblemas } from '../../../service/problemasService';
import { todasPrefeituras } from '../../../service/prefeituraService';
import { todosUsuarios } from '../../../service/usuarioService';

export default function TabelaProblemasFinalizadas() {
	const [problema, setProblema] = useState([]);
	const [usuario, setUsuario] = useState([]);
	const [prefeitura, setPrefeitura] = useState([]);
	const [categorias, setCategorias] = useState([
		{ id: 1, nome: 'Iluminação' },
		{ id: 2, nome: 'Avenida' },
		{ id: 3, nome: 'Lixo' },
		{ id: 4, nome: 'Saneamento' },
		{ id: 5, nome: 'Sinalização' },
		{ id: 6, nome: 'Outros' },
	]);

	useEffect(() => {
		const carregarProblemas = async () => {
			const problemas = await todosProblemas();
			setProblema(problemas.problemas);
		};
		carregarProblemas();

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

	const getUsuario = (usuarioId) => {
		const user = usuario.find((usr) => usr.id === usuarioId);
		return user ? user.nome : 'usuário não encontrado';
	};

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

	return (
		<>
			<Typography variant="h4" style={{ margin: '2rem 0' }}>
				Lista de denúncias pendentes
			</Typography>
			<TableContainer
				style={{
					maxHeight: '500px',
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
							<TableCell>Autor</TableCell>
							<TableCell>Categoria</TableCell>
							<TableCell>Prefeitura responsável</TableCell>
							<TableCell>Descrição</TableCell>
							<TableCell></TableCell>
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
									<TableCell>{getUsuario(problema.usuario_id)}</TableCell>
									<TableCell>{getCategoria(problema.categoria_id)}</TableCell>
									<TableCell>
										{getNomePrefeitura(problema.prefeitura_id)}
									</TableCell>

									<TableCell>{problema.observacao}</TableCell>
									<TableCell>
										<Button>
											<EditOutlinedIcon />
										</Button>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

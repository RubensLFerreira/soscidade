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
	Button
} from '@mui/material';

import { todosProblemas } from '../../../service/problemasService';

export default function TabelaProblemas() {
	const [problema, setProblema] = useState([]);

	useEffect(() => {
		const carregarProblemas = async () => {
			const problemas = await todosProblemas();
			setProblema(problemas.problemas);
			console.log(problemas.problemas);
		};
		carregarProblemas();
	}, []);

	return (
		<>
			<Typography variant="h4" style={{ margin: '2rem 0' }}>
				Lista de denúncias cadastradas
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
							<TableCell>Observação</TableCell>
							<TableCell>Categoria</TableCell>
							<TableCell>Cidadão</TableCell>
							<TableCell>Prefeitura</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{problema.map((problema) => (
							<TableRow
								key={problema.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell>{problema.observacao}</TableCell>
								<TableCell>{problema.categoria_id}</TableCell>
								<TableCell>{problema.cidadao_id}</TableCell>
								<TableCell>{problema.prefeitura_id}</TableCell>
								<TableCell><Button>Editar</Button></TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

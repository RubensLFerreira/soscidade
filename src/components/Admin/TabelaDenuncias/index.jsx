import * as React from 'react';
import {
	Table,
	Typography,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';

import { useState, useEffect } from 'react';
import { todasDenuncias } from '../../../service/DenunciaService';

export default function TabelaDenuncias() {
	const [denuncia, setDenuncia] = useState([]);

	useEffect(() => {
		const CarregarDenuncias = async () => {
			const denuncias = await todasDenuncias();
			setDenuncia(denuncias.denuncias);
			console.log(denuncias.denuncias);
		};
		CarregarDenuncias();
	}, []);

	return (
		<>
			<Typography variant="h4" style={{ margin: '2rem 0' }}>
				Lista de cidadãos cadastrados
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
							<TableCell>ID</TableCell>
							<TableCell align="right">Status</TableCell>
							<TableCell align="right">Categoria</TableCell>
							<TableCell align="right">Cidadão</TableCell>
							<TableCell align="right">prefeitura</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{denuncia.map((denuncia) => (
							<TableRow
								key={denuncia.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{denuncia.status}
								</TableCell>
								<TableCell align="right">{denuncia.categoria}</TableCell>
								<TableCell align="right">{denuncia.cidadao}</TableCell>
								<TableCell align="right">{denuncia.prefeitura}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

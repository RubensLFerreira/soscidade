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
	Button
} from '@mui/material';

import { useState, useEffect } from 'react';
import { todosCidadaos } from '../../../service/cidadaoService';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function TabelaCidadaos() {
	const [cidadao, setCidadao] = useState([]);

	useEffect(() => {
		const CarregarCidadaos = async () => {
			const cidadaos = await todosCidadaos();
			setCidadao(cidadaos.cidadaos);
			// console.log(cidadaos.cidadaos);
		};
		CarregarCidadaos();
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
							<TableCell align="right">Nome</TableCell>
							<TableCell align="right">CPF</TableCell>
							<TableCell align="right">Email</TableCell>
							<TableCell align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cidadao.map((cidadao) => (
							<TableRow
								key={cidadao.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{cidadao.id}
								</TableCell>
								<TableCell align="right">{cidadao.usuario['nome']}</TableCell>
								<TableCell align="right">{cidadao.cpf}</TableCell>
								<TableCell align="right">{cidadao.usuario['email']}</TableCell>
								<TableCell>
									<Button><EditOutlinedIcon /></Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

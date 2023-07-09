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
import { todasPrefeituras } from '../../../service/PrefeituraService';

export default function TabelaPrefeituras() {
  const [prefeitura, setPrefeitura] = useState([]);

  useEffect(() => {
    const CarregarPrefeituras = async () => {
      const prefeituras = await todasPrefeituras();
      setPrefeitura(prefeituras.prefeituras);
      console.log(prefeituras.prefeituras);
    };
    CarregarPrefeituras();
  }, []);

  return (
    <>
      <Typography variant="h4" style={{ margin: '2rem 0' }}>
        Lista de cidadãos cadastrados
      </Typography>
      <TableContainer
        style={{ maxHeight: '500px', maxWidth: '100%', overflowY: 'auto', overflowX: 'auto' }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Site</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prefeitura.map((prefeitura) => (
              <TableRow
                key={prefeitura.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {prefeitura.id}
                </TableCell>
                <TableCell align="right">
                  {prefeitura.usuario['nome']}
                </TableCell>
                <TableCell align="right">{prefeitura.site}</TableCell>
                <TableCell align="right">
                  {prefeitura.usuario['email']}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

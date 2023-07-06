import { useState, useEffect } from 'react';
import { todosCidadaos } from '../../../service/cidadaoService';

import Navbar from '../../../components/Navbar';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material/';

import { StyledBox } from './StyledCidadao';

export default function BuscarCidadaos() {
  const [cidadao, setCidadao] = useState([]);

  useEffect(() => {
    const CarregarCidadaos = async () => {
      const cidadaos = await todosCidadaos();
      setCidadao(cidadaos.cidadaos);
      console.log(cidadaos.cidadaos);
    };
    CarregarCidadaos();
  }, []);

  return (
    <>
      <Navbar />
      <StyledBox>
        <h1>Todos os cidadãos</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Nome</TableCell>
                <TableCell align="right">CPF</TableCell>
                <TableCell align="right">Email</TableCell>
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
                  <TableCell align="right">
                    {cidadao.usuario['email']}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledBox>
    </>
  );
}

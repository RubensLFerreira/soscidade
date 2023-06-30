import { useState, useEffect } from "react";
import { todasPrefeituras } from "../../../service/prefeituraService";

import Navbar from "../../../components/Navbar";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material/";

import { StyledBox } from "./StyledPrefeitura";

export default function BuscarPrefeituras() {
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
      <Navbar />
      <StyledBox>
        <h1>Todos as prefeituras</h1>
        <TableContainer component={Paper}>
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
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {prefeitura.id}
                  </TableCell>
                  <TableCell align="right">{prefeitura.usuario["nome"]}</TableCell>
                  <TableCell align="right">{prefeitura.site}</TableCell>
                  <TableCell align="right">
                    {prefeitura.usuario["email"]}
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

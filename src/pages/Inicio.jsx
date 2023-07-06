import * as React from 'react';
import { Button, Typography, CssBaseline, Container } from '@mui/material';

export default function Inicio() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography variant="h5" component="h2">
          Página para testar rotas**
        </Typography>

        <br />
        <Button href="/login">Login</Button>
        <br />
        <hr />
        <Button href="/admin">Admin</Button>
        <br />
        <hr />
        <Button href="/reportar">Reportar</Button>
        <br />
        <hr />
        <Button href="/denunciar">Denunciar</Button>
        <br />
        <hr />
        <Button href="/cidadaos">Buscar cidadãos</Button>
        <br />
        <Button href="/cidadao/cadastrar">Cadastrar cidadão</Button>
        <br />
        <hr />
        <Button href="/prefeituras">Buscar prefeituras</Button>
        <br />
        <Button href="/prefeitura/cadastrar">Cadastrar prefeituras</Button>
      </Container>
    </React.Fragment>
  );
}

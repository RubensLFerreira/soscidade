import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { cadastrarCidadao } from '../../../service/cidadaoService';

import { Alert, Stack, Grid, IconButton } from '@mui/material';
import { BsArrowLeftSquare } from 'react-icons/bs';

import {
  StyledBox,
  StyledButton,
  StyledTextField1,
  StyledTypography,
  StyledTypography2,
} from './StyledCidadao';

export default function FormRegister() {
  const [alert, setAlert] = useState(false);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [sexo, setSexo] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const cidadaoSubmit = async (event) => {
    event.preventDefault();
    await cadastrarCidadao(
      nome,
      cpf,
      sexo,
      nascimento,
      telefone,
      email,
      login,
      senha
    );
    console.log(cadastrarCidadao);
    setAlert(true);
  };

  return (
    <StyledBox>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Link to={`/login`}>
            <IconButton aria-label="back" className="button-voltar-login">
              <BsArrowLeftSquare />
            </IconButton>
          </Link>
        </Grid>

        <Grid item xs={12}>
          <StyledTypography>Cadastrar cidadão</StyledTypography>
        </Grid>

        <Grid item xs={12}>
          <StyledTextField1
            id="standard-basic"
            label="Nome"
            variant="standard"
            type="text"
            required
            placeholder="Digite seu nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField1
            id="standard-basic"
            label="Telefone"
            variant="standard"
            type="tel"
            required
            placeholder="Digite seu telefone"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField1
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
            required
            placeholder="Digite seu email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField1
            id="standard-basic"
            label="CPF"
            variant="standard"
            type="text"
            required
            placeholder="Digite seu cpf"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField1
            id="standard-basic"
            label="Sexo"
            variant="standard"
            type="text"
            required
            placeholder="Digite seu sexo"
            value={sexo}
            onChange={(event) => setSexo(event.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField1
            id="standard-basic"
            variant="standard"
            type="date"
            required
            placeholder="Digite seu nascimento"
            value={nascimento}
            onChange={(event) => setNascimento(event.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField1
            id="standard-basic"
            label="Login"
            variant="standard"
            type="text"
            required
            placeholder="Digite seu login"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField1
            id="standard-basic"
            label="Senha"
            variant="standard"
            type="password"
            required
            placeholder="Digite sua senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledButton
            variant="contained"
            type="submit"
            onClick={cidadaoSubmit}
          >
            Cadastrar
          </StyledButton>
        </Grid>

        <Grid item xs={12}>
          <StyledTypography2>
            Possui conta? <Link to={`/Login`}>Login</Link>
          </StyledTypography2>
        </Grid>
      </Grid>

      {alert && (
        <Stack sx={{ width: '300px', marginLeft: '1rem' }} spacing={2}>
          <Alert variant="filled" severity="success">
            Prefeitura cadastrada com sucesso!
          </Alert>
        </Stack>
      )}
    </StyledBox>
  );
}

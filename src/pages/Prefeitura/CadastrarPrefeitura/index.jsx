import React, { useState } from "react";
import { Link } from "react-router-dom";

import { cadastrarPrefeitura } from "../../../service/prefeituraService";

import { Alert, Stack, Grid, IconButton } from "@mui/material";
import { BsArrowLeftSquare } from "react-icons/bs";

import {
  StyledBox,
  StyledButton,
  StyledTextField1,
  StyledTypography,
  StyledTypography2,
} from "./StyledPrefeitura";


export default function FormRegisterPrefeitura() {
  const [alert, setAlert] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [prefeito, setPrefeito] = useState("");
  const [site, setSite] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const prefeituraSubmit = async (event) => {
    event.preventDefault();
    await cadastrarPrefeitura(
      nome,
      telefone,
      email,
      prefeito,
      site,
      login,
      senha
    );
    console.log(cadastrarPrefeitura);
    setAlert(true);
  };

  return (
    <StyledBox>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Link to={`/tipo-cadastro`}>
            <IconButton aria-label="back" className="button-voltar-login">
              <BsArrowLeftSquare />
            </IconButton>
          </Link>
        </Grid>

        <Grid item xs={12}>
          <StyledTypography>Cadastrar</StyledTypography>
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
            type="text"
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
            type="text"
            required
            placeholder="Digite seu email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField1
            id="standard-basic"
            label="Prefeito"
            variant="standard"
            type="text"
            required
            placeholder="Digite seu prefeito"
            value={prefeito}
            onChange={(event) => setPrefeito(event.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField1
            id="standard-basic"
            label="Site"
            variant="standard"
            type="text"
            required
            placeholder="Digite seu site"
            value={site}
            onChange={(event) => setSite(event.target.value)}
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
          <StyledButton variant="contained" type="submit" onClick={prefeituraSubmit}>
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
        <Stack sx={{ width: "300px", marginLeft: "1rem" }} spacing={2}>
          <Alert variant="filled" severity="success">
            Prefeitura cadastrada com sucesso!
          </Alert>
        </Stack>
      )}
    </StyledBox>
  );
}
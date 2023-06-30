import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Grid,Typography } from "@mui/material";

import { LogoVertical } from "../../components/LogoVertical";

import { StyledBox, StyledTextField1, StyledButton } from "./StyledLogin";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <StyledBox>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LogoVertical />
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
          <StyledButton variant="contained" type="submit">
            Entrar
          </StyledButton>
        </Grid>

        <Grid item xs={12}>
          <Typography>
            Não possui conta? <Link to={`/tipo-cadastro`}>Cadastra-se</Link>
          </Typography>
        </Grid>

      </Grid>
    </StyledBox>
  );
}

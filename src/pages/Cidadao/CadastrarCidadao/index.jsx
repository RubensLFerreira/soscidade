import React, { useState } from "react";
import { Link } from "react-router-dom";

import { cadastrarCidadao } from "../../../service/cidadaoService";

import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  Stack,
  Alert,
} from "@mui/material";

import { BsArrowLeftSquare } from "react-icons/bs";

import "./CadastrarCidadao.css";

export default function FormRegister() {
  const [alert, setAlert] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

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
    <div>
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{ textAlign: "center" }}
          className="box-style"
        >
          <Link to={`/tipo-cadastro`}>
            <IconButton aria-label="delete" className="button-voltar-login">
              <BsArrowLeftSquare />
            </IconButton>
          </Link>

          <Typography
            className="tittle-style"
            style={{ fontWeight: "700" }}
            variant="h5"
          >
            Cadastrar
          </Typography>

          <form onSubmit={cidadaoSubmit}>
            <TextField
              style={{ width: "20rem", height: "2.5rem" }}
              id="standard-basic"
              label="Nome completo"
              variant="standard"
              type="text"
              required
              placeholder="Ex: Pedro Silva"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <br />

            <TextField
              style={{ width: "20rem", height: "2.5rem" }}
              id="standard-basic"
              label="CPF"
              variant="standard"
              type="text"
              required
              placeholder="Obs: Sem sinais"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
            />
            <br />

            <TextField
              style={{ width: "20rem", height: "3.5rem" }}
              id="standard-basic"
              label="Sexo"
              variant="standard"
              type="text"
              required
              placeholder="Ex: M ou F"
              value={sexo}
              onChange={(event) => setSexo(event.target.value)}
            />
            <br />

            <TextField
              style={{ width: "20rem", height: "1.5rem" }}
              id="standard-basic"
              variant="standard"
              type="date"
              required
              value={nascimento}
              onChange={(event) => setNascimento(event.target.value)}
            />
            <br />

            <TextField
              style={{ width: "20rem", height: "2.5rem" }}
              id="standard-basic"
              label="Telefone"
              variant="standard"
              type="tel"
              required
              placeholder="Obs: sem sinais"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
            <br />

            <TextField
              style={{ width: "20rem", height: "2.5rem" }}
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
              required
              placeholder="Ex: mario@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />

            <TextField
              style={{ width: "20rem", height: "2.5rem" }}
              id="standard-basic"
              label="Login"
              variant="standard"
              type="text"
              required
              placeholder="Obs: será usado para login"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
            <br />

            <TextField
              style={{ width: "20rem", height: "2.5rem" }}
              id="standard-basic"
              label="Senha"
              variant="standard"
              type="password"
              required
              placeholder="Obs: será usado para login"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
            <br />

            <Button
              style={{ margin: "3rem 0 2rem 0" }}
              className="button-style"
              variant="contained"
              type="submit"
            >
              Cadastrar
            </Button>

            <Typography>
              Já possui uma conta? <Link to={`/login`}>Login</Link>
            </Typography>
          </form>
        </Box>
      </div>
      {alert && (
        <Stack sx={{ width: "300px", marginLeft: "1rem" }} spacing={2}>
          <Alert variant="filled" severity="success">
            Cidadão cadastrado com sucesso!
          </Alert>
        </Stack>
      )}
    </div>
  );
}

import React, { useState, useContext } from 'react';

import AuthContext from '../../context/AuthContext';

import { Link, useNavigate } from 'react-router-dom';

import { Grid, Typography, Box, Alert } from '@mui/material';

import { LogoVertical } from '../../components/LogoVertical';

import { StyledBox, StyledTextField1, StyledButton } from './StyledLogin';

export default function Login() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const auth = useContext(AuthContext);

  const handleLogin = async () => {
    if (login && senha) {
      const isLogged = await auth.signin(login, senha);
      if (isLogged) {
        navigate('/');
        setAlert(true);
        setTimeout(() => {
          setAlert(false); 
        }, 3000);
      } else {
        console.log('Erro no handleLogin');
      }
    }
  };

  const ClickCadastro = () => {
    navigate('/tipo-cadastro');
  };

  return (
    <StyledBox>
      <form onSubmit={() => setAlert(true)}>
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
            <StyledButton onClick={handleLogin} variant="contained" type="submit">
              Entrar
            </StyledButton>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              Não possui conta? <Link onClick={ClickCadastro}>Cadastra-se</Link>
            </Typography>
          </Grid>
        </Grid>

        {alert && (
          <Box
            sx={{
              float: 'right',
              padding: '1em',
              marginTop: '480px',
              marginRight: '-400px',
            }}
          >
            <Alert sx={{}} variant="filled" severity="success">
              Usuário logado com sucesso!
            </Alert>
          </Box>
        )}
      </form>
    </StyledBox>
  );
}

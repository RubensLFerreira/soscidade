import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
;
import { Grid, Typography, Alert, Box } from '@mui/material';
import { LogoVertical } from '../../components/LogoVertical';
import { StyledBox, StyledTextField1, StyledButton } from './StyledLogin';

import { validarLogin, validarSenha } from '../../utils/validadores';

import AuthService from '../../service/AuthService';

const authService = new AuthService();

export default function Login() {
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      const response = await authService.login(form);
      console.log('Usuário logado!', response);

      if (response) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('login', response.data.login);

        navigate('/');
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      }

      setLoading(false);
    } catch (error) {
      console.log('erro do Login', error);
      alert('Erro ao logar usuário');
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validadorInput = () => {
    return validarLogin(form.login) && validarSenha(form.senha);
  };

  return (
    <StyledBox>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <LogoVertical />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField1
              name="login"
              placeholder="Digite o seu login"
              onChange={handleChange}
              type="text"
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField1
              name="senha"
              placeholder="Digite a sua senha"
              onChange={handleChange}
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <StyledButton
              type="submit"
              onClick={handleSubmit}
              disabled={loading || !validadorInput()}
            >
              Entrar
            </StyledButton>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Não possui conta?{' '}
              <Link to={`/cidadao/cadastrar`}>Cadastra-se</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
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
    </StyledBox>
  );
}

import React from 'react';
import { Router } from './index.jsx';
import AuthService from '../service/AuthService';

const authService = new AuthService();

const ProtectedRoutes = ({ children }) => {
  const usuarioAutenticado = authService.usuarioAutenticado();
  console.log('Usuario autenticado', usuarioAutenticado);
  return usuarioAutenticado ? children : <Router />;
};

export default ProtectedRoutes;

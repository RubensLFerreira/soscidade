import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';

import Reportar from '../pages/Reportar';

import Denunciar from '../pages/Denunciar';

import Admin from '../pages/Admin';

import CadastrarCidadao from '../pages/Cidadao/CadastrarCidadao';

import CadastrarPrefeitura from '../pages/Prefeitura/CadastrarPrefeitura';

import NotPage from '../pages/NotPage';

import ProtectedRoutes from './ProtectedRoutes';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Reportar />} />

      <Route path="/login" element={<Login />} />

      <Route path="/denunciar" element={<Denunciar />} />

      <Route path="/cidadao/cadastrar" element={<CadastrarCidadao />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoutes>
						<Admin />
          </ProtectedRoutes>
        }
      />

      <Route path="/prefeitura/cadastrar" element={<CadastrarPrefeitura />} />

      <Route path="*" element={<NotPage />} />
    </Routes>
  );
};

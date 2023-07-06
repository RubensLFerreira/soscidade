import { Routes, Route } from 'react-router-dom';

import Inicio from '../pages/Inicio';

import Login from '../pages/Login';

import Reportar from '../pages/Reportar';

import Denunciar from '../pages/Denunciar';

import Admin from '../pages/Admin';

import BuscarCidadaos from '../pages/Admin/BuscarCidadao';
import CadastrarCidadao from '../pages/Cidadao/CadastrarCidadao';

import BuscarPrefeitura from '../pages/Admin/BuscarPrefeitura';
import CadastrarPrefeitura from '../pages/Prefeitura/CadastrarPrefeitura';

import NotPage from '../pages/NotPage';

import ProtectedRoutes from './ProtectedRoutes';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<Admin />} />

      <Route path="/reportar" element={<Reportar />} />

      <Route path="/denunciar" element={<Denunciar />} />

      <Route path="/cidadaos" element={<BuscarCidadaos />} />
      <Route path="/cidadao/cadastrar" element={<CadastrarCidadao />} />

      <Route
        path="/prefeituras"
        element={
          <ProtectedRoutes>
            <BuscarPrefeitura />
          </ProtectedRoutes>
        }
      />

      <Route path="/prefeitura/cadastrar" element={<CadastrarPrefeitura />} />

      <Route path="*" element={<NotPage />} />
    </Routes>
  );
};

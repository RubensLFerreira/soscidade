import { Routes, Route } from 'react-router-dom';

import Inicio from '../pages/Inicio';

import Login from '../pages/Login';

import Reportar from '../pages/Reportar';

import TipoCadastro from '../pages/TipoCadastro';

import Denunciar from '../pages/Denunciar';

import BuscarCidadaos from '../pages/Admin/BuscarCidadao';
import CadastrarCidadao from '../pages/Cidadao/CadastrarCidadao';

import BuscarPrefeitura from '../pages/Admin/BuscarPrefeitura';
import CadastrarPrefeitura from '../pages/Prefeitura/CadastrarPrefeitura';

import NotPage from '../pages/NotPage';

import RequireAuth from '../context/RequireAuth';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/login" element={<Login />} />

      <Route path="/reportar" element={<Reportar />} />

      <Route path="/tipo-cadastro" element={<TipoCadastro />} />

      <Route path="/denunciar" element={<Denunciar />} />

      <Route path="/cidadaos" element={<BuscarCidadaos />} />
      <Route path="/cidadao/cadastrar" element={<CadastrarCidadao />} />

      <Route
        path="/prefeituras"
        element={
          <RequireAuth>
            <BuscarPrefeitura />
          </RequireAuth>
        }
      />

      <Route path="/prefeitura/cadastrar" element={<CadastrarPrefeitura />} />

      <Route path="*" element={<NotPage />} />
    </Routes>
  );
};

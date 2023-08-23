import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';

import Reportar from '../pages/Reportar';

import Denunciar from '../pages/Denunciar';

import Atendimento from '../pages/Atendimento';

import Informacao from '../pages/Informacao';

import Admin from '../pages/Admin';

import Perfil from '../pages/Perfil';

import DashboardCidadao from '../pages/Usuario';

import CadastrarCidadao from '../pages/Cidadao/CadastrarCidadao';

import CadastrarPrefeitura from '../pages/Prefeitura/CadastrarPrefeitura';

import NotPage from '../pages/NotPage';

import { UserProvider } from '../context/UserContext';
import UsuarioEditar from './../pages/Usuario/UsuarioEditar';

export const Router = () => {
	return (
		<UserProvider>
			<Routes>
				<Route path="/" element={<Reportar />} />

				<Route path="/login" element={<Login />} />

				<Route path="/denunciar" element={<Denunciar />} />

				<Route path="/atendimento" element={<Atendimento />} />

				<Route path="/informacao" element={<Informacao />} />

				<Route path="/cidadao/cadastrar" element={<CadastrarCidadao />} />

				<Route path="/usuario/dashboard" element={<DashboardCidadao />} />

				<Route path="/editar/usuario/:id?" element={<UsuarioEditar />} />

				<Route path="/perfil/:id?" element={<Perfil />} />

				<Route path="/admin" element={<Admin />} />

				<Route path="/prefeitura/cadastrar" element={<CadastrarPrefeitura />} />

				<Route path="*" element={<NotPage />} />
			</Routes>
		</UserProvider>
	);
};

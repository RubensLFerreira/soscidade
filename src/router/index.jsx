import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';

import Reportar from '../pages/Reportar';

import Denunciar from '../pages/Denunciar';

import Admin from '../pages/Admin';

import DashboardCidadao from '../pages/Usuario';

import CadastrarCidadao from '../pages/Cidadao/CadastrarCidadao';

import CadastrarPrefeitura from '../pages/Prefeitura/CadastrarPrefeitura';

import NotPage from '../pages/NotPage';

import { UserProvider } from '../context/UserContext';

export const Router = () => {
	return (
		<UserProvider>
			<Routes>
				<Route path="/" element={<Reportar />} />

				<Route path="/login" element={<Login />} />

				<Route path="/denunciar" element={<Denunciar />} />

				<Route path="/cidadao/cadastrar" element={<CadastrarCidadao />} />

				<Route path="/cidadao/dashboard" element={<DashboardCidadao />} />

				<Route path="/admin" element={<Admin />} />

				<Route path="/prefeitura/cadastrar" element={<CadastrarPrefeitura />} />

				<Route path="*" element={<NotPage />} />
			</Routes>
		</UserProvider>
	);
};

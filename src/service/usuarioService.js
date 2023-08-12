import api from './baseApi';

export const todosUsuarios = async () => {
	try {
		const usuarios = await api.get('/usuarios');
		return usuarios.data;
	} catch (error) {
		console.log('[Erro] Service/usuarioService', error);
	}
};
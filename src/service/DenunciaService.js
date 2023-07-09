import api from './Api';

export const todasDenuncias = async () => {
	try {
		const denuncias = await api.get('/problemas');
		return denuncias.data;
	} catch (error) {
		console.log('[Erro] Service/denuncias', error);
	}
};

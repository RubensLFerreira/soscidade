import api from './Api';

export const todosProblemas = async () => {
	try {
		const problemas = await api.get('/problemas');
		return problemas.data;
	} catch (error) {
		console.log('[Erro] Service/problemas', error);
	}
};

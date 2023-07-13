import api from './baseApi';

export const todosProblemas = async () => {
	try {
		const problemas = await api.get('/problemas');
		return problemas.data;
	} catch (error) {
		console.log('Erro no ProblemasServices!');
		return { message: error };
	}
};

export const todosProblemasPendentes = async () => {
	try {
		const problemas = await api.get('/problemas/pendentes');
		return problemas.data;
	} catch (error) {
		console.log('Erro no ProblemasServices!');
		return { message: error };
	}
};

export const todosProblemasFinalizados = async () => {
	try {
		const finalizados = await api.get('/problemas/finalizados');
		return finalizados.data;
	} catch (error) {
		console.log('Erro no ProblemasServices!');
		return { message: error };
	}
};

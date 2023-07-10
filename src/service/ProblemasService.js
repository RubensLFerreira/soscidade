import api from './Api';

export const todosProblemas = async () => {
	try {
		const problemas = await api.get('/problemas');
		return problemas.data;
	} catch (error) {
		console.log('Erro no ProblemasServices!');
		return { message: error };
	}
};

export const problemasPendentes = async () => {
	try {
		const pendentes = await api.get('/problemas/pendentes');
		return pendentes.data;
	} catch (error) {
		console.log('Erro no ProblemasServices!');
		return { message: error };
	}
};

export const problemasFinalizados = async () => {
	try {
		const finalizados = await api.get('/problemas/finalizados');
		return finalizados.data;
	} catch (error) {
		console.log('Erro no ProblemasServices!');
		return { message: error };
	}
};

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

export const deleteProblema = async (id) => {
	try {
		const problema = await api.delete(`/problema/excluir/${id}`);
		return problema.data;
	} catch (error) {
		console.log('Erro ao deletar denúncia', error);
		return { message: error };
	}
};

export const todasDenunciasUsuario = async (id) => {
	try {
		const problemas = await api.get(`/problemas/usuario/${id}`);
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

export const cadastrarProblema = async (problemaData) => {
	try {
		const formData = new FormData();
		console.log(problemaData);

		formData.append('observacao', problemaData.observacao);
		formData.append('status', problemaData.status);
		formData.append('categoria', problemaData.categoria);
		formData.append('usuario', problemaData.usuario);
		formData.append('prefeitura', problemaData.prefeitura);
		formData.append('latitude', problemaData.latitude);
		formData.append('longitude', problemaData.longitude);
		formData.append('rua', problemaData.rua);
		formData.append('bairro', problemaData.bairro);
		formData.append('cidade', problemaData.cidade);
		formData.append('uf', problemaData.uf);

		for (let i = 0; i < problemaData.imagem.length; i++) {
			formData.append('imagem', problemaData.imagem[i]);
		}

		const resposta = await api.post('/problema/cadastrar/problema', formData);

		return resposta.data;
	} catch (error) {
		console.log('Erro ao cadastrar denuncia!', error);
		throw error;
	}
};

export const editarProblema = async (problemaData, id) => {
	try {
		const formData = new FormData();
		console.log(problemaData);

		formData.append('observacao', problemaData.observacao);
		formData.append('status', problemaData.status);
		formData.append('categoria', problemaData.categoria);
		formData.append('usuario', problemaData.usuario);
		formData.append('prefeitura', problemaData.prefeitura);
		formData.append('latitude', problemaData.latitude);
		formData.append('longitude', problemaData.longitude);
		formData.append('rua', problemaData.rua);
		formData.append('bairro', problemaData.bairro);
		formData.append('cidade', problemaData.cidade);
		formData.append('uf', problemaData.uf);

		for (let i = 0; i < problemaData.imagem.length; i++) {
			formData.append('imagem', problemaData.imagem[i]);
		}

		const resposta = await api.put(`/problema/editar/${id}`, formData);

		return resposta.data;
	} catch (error) {
		console.log('Erro ao editar denuncia!', error);
		throw error;
	}
}
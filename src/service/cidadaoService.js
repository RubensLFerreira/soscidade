import api from './baseApi';

export const todosCidadaos = async () => {
	try {
		const cidadaos = await api.get('/cidadaos');
		return cidadaos.data;
	} catch (error) {
		console.error(error.message);
		return {
			code: 500,
			message: 'Erro ao editar cidadão',
		};
	}
};

export const editarCidadao = async (cidadaoData, cidadaoId) => {
	try {
		const formData = new FormData();
		console.log(cidadaoData);

		formData.append('nome', cidadaoData.nome);
		formData.append('cpf', cidadaoData.cpf);
		formData.append('sexo', cidadaoData.sexo);
		formData.append('nascimento', cidadaoData.nascimento);
		formData.append('telefone', cidadaoData.telefone);
		formData.append('email', cidadaoData.email);
		formData.append('login', cidadaoData.login);
		formData.append('senha', cidadaoData.senha);
		formData.append('usuarioId', cidadaoData.usuarioId);

		const response = await api.put(`/cidadao/editar/${cidadaoId}`, formData);
		return response.data;
	} catch (error) {
		console.error(error.message);
		return {
			code: 500,
			message: 'Erro ao editar cidadão',
		};
	}
};

export const cadastrarCidadao = async (
	nome,
	cpf,
	sexo,
	nascimento,
	telefone,
	email,
	login,
	senha,
	perfil_id = 1
) => {
	try {
		const cidadaos = await api.post('/cidadao/cadastrar', {
			nome,
			cpf,
			sexo,
			nascimento,
			telefone,
			email,
			login,
			senha,
			perfil_id,
		});
		return cidadaos;
	} catch (error) {
		console.error(error.message);
		return {
			code: 500,
			message: 'Erro ao editar cidadão',
		};
	}
};

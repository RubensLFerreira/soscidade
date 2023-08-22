import api from './baseApi.js';

export const Imagens = async () => {
	try {
		const imagem = await api.get(`/imagem/${imagemName}`);
		return imagem.data;
	} catch (error) {
		console.log('[Erro] Service/imagemService', error);
	}
};

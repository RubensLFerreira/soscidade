import api from './api';

export const todasPrefeituras = async () => {
  try {
    const prefeituras = await api.get('/prefeituras');
    return prefeituras.data;
  } catch (error) {
    console.log('[Erro] Service/prefeituraService', error);
  }
};

export const cadastrarPrefeitura = async (
  nome,
  telefone,
  email,
  prefeito,
  site,
  login,
  senha,
  perfil_id = 2
) => {
  try {
    const prefeitura = await api.post('/prefeitura/cadastrar', {
      nome,
      telefone,
      email,
      prefeito,
      site,
      login,
      senha,
      perfil_id,
    });

    return prefeitura;
  } catch (error) {
    console.log('[Erro] Service/prefeituraService', error);
  }
};

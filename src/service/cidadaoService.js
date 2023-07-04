import api from './api';

export const todosCidadaos = async () => {
  try {
    const cidadaos = await api.get('/cidadaos');
    // console.log(cidadaos['data']['cidadaos'][0]['usuario']);
    return cidadaos.data;
  } catch (error) {
    console.log('[Erro] Service/cidadaoService', error);
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
    console.log('[Erro] Service/cidadaoService', error);
  }
};
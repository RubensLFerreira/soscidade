import api from './Api';

export default class AuthService {
  async login(dados) {
    const response = await api.post('/login', dados);
    console.log(response);

    if (response.usuario) {
      localStorage.setItem('token', response.usuario.token);
      localStorage.setItem('nome', response.usuario.nome);
      localStorage.setItem('login', response.usuario.login);

      return true;
    }

    return;
  }

  async cadastrar(dados) {
    const response = await api.post('/cidadao/cadastrar', dados);
    return response.usuario;
  }

  usuarioAutenticado() {
    return localStorage.getItem('token') !== undefined ? true : false;
  }

  async logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('login');
  }
}

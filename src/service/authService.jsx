import jwt_decode from 'jwt-decode';
import api from './api';

export const useApi = () => ({
  validade: async (token) => {
    let isExpired = false;

    const decodedToken = jwt_decode(token);
    console.log(decodedToken.id);

    const dateNow = new Date();

    if (decodedToken.exp < dateNow.getTime()) {
      isExpired = false;
    }

    if (!isExpired) {
      const usuario = await api
        .get(`/usuario/${decodedToken.id}`, {
          headers: {
            authorization: token,
          },
        })
        .catch((err) => err);
      localStorage.setItem('ID', usuario.data.id);
      return usuario.data;
    }
    return null;
  },

  signin: async (login, senha) => {
    const usuario = await api
      .post('/usuario/authenticate', { login, senha })
      .then((response) => response.data)
      .catch((err) => err);

    return usuario;
  },

  signout: async () => {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('ID');
  },
});

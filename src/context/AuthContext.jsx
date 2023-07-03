import { createContext, useState } from 'react';
import { useApi } from '../service/authService';

export const AuthContext = createContext();

const AuthProvider  = ({ children }) => {
  const [usuario, setUsuario] = useState({});

  const api = useApi();

  const signin = async (login, senha) => {
    const usuario = await api.signin(login, senha);
    if (usuario.usuario && usuario.token) {
      setUsuario(usuario.usuario);
      localStorage.setItem('TOKEN', usuario.token);
      localStorage.setItem('ID', usuario.usuario['id']);

      console.log(usuario.token);
      console.log(usuario.usuario['id']);
      return true;
    }
    return false;
  };

  const signout = async () => {
    setUsuario(null);
    await api.signout();
  };

  return (
    <AuthContext.Provider value={{ usuario, setUsuario, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider ;

import { createContext, useState } from 'react';
import { useApi } from '../service/authService';

export default AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});

  return (
    <AuthContext.Provider value={{ usuario, setUsuario, signin, signout }}>
      { children }
    </AuthContext.Provider>
  );
}
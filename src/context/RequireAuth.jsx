import React, { useContext } from 'react';
import Reportar from '../pages/Reportar';
import { AuthContext } from './AuthContext';

const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.usuario.id) {
    return <Reportar />;
  }

  return children;
};

export default RequireAuth;

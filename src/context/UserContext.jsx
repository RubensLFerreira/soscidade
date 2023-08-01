import { createContext } from 'react';

import useAuth from '../service/useAuth';

export const Context = createContext();

export const UserProvider = ({ children }) => {
	const { authenticated, loading, login, logout } = useAuth();

	return (
		<Context.Provider value={{ authenticated, loading, login, logout }}>
			{children}
		</Context.Provider>
	);
};

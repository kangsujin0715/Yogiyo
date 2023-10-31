import React, { useContext } from 'react';
import { UserVO } from 'src/interface/user/UserVO';

export const AuthContext = React.createContext(
  {} as {
    userInfo: UserVO | null;
    isAuthenticated: boolean;
    logout: (redirectTo?: string) => void;
  },
);

export const useAuth = () => useContext(AuthContext);

import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { userInfoAtom } from 'src/recoil/user/userAtoms';
import { AuthContext } from './AuthContext';

interface AuthProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProps) => {
  const router = useRouter();
  const userInfo = useRecoilValue(userInfoAtom);
  const isAuthenticated = true; //!!userInfo;

  const authenticate = async (token: string) => {
    try {
      // todo 사용자 인증 로직
    } catch (error) {
      console.log({ error });
    }
  };

  const logout = (redirectTo?: string) => {
    redirectTo && router.replace(redirectTo);
  };

  useEffect(() => {
    console.log('AuthProvider useEffect');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userInfo: userInfo,
        isAuthenticated: isAuthenticated,
        logout: logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

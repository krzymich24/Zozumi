import { ReactNode, useState } from 'react';
import { UserProfile } from './types/user';
import { AuthContext } from './context';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<UserProfile | null>(null);

  return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>;
};

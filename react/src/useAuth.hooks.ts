import { useContext } from 'react';
import { decodeToken } from 'react-jwt';
import { Maybe } from 'typescript-functional-extensions';
import { AuthContext } from './context';
import { UserProfile } from './types/user';

export const useAuth = () => {
  const TOKEN_MAGIC_STRING = 'token';
  const [auth, setAuth] = useContext(AuthContext);

  const getToken = () => sessionStorage.getItem(TOKEN_MAGIC_STRING);

  const authorizeFromSession = () => {
    const payload = Maybe.from(getToken()).map((token) => decodeToken(token) as UserProfile);
    if (payload.hasNoValue) return;
    console.warn({ payload: payload.getValueOrThrow() });
    setAuth(payload.getValueOrThrow());
  };

  const saveAuth = (userToken: string) => {
    const user: UserProfile | null | undefined = decodeToken(userToken);
    if (!user) return;
    console.warn(user);
    // save in memo
    setAuth(user);
    // save in session store
    sessionStorage.setItem(TOKEN_MAGIC_STRING, userToken);
  };

  const unauthorize = () => {
    setAuth(null);
    sessionStorage.removeItem(TOKEN_MAGIC_STRING);
  };

  return { auth, saveAuth, unauthorize, authorizeFromSession, getToken };
};

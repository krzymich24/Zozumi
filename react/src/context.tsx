import { createContext, Dispatch, SetStateAction } from 'react';

import { UserProfile } from './types/user';

export const AuthContext = createContext<[UserProfile | null, Dispatch<SetStateAction<UserProfile | null>>]>([
  null,
  () => {},
]);

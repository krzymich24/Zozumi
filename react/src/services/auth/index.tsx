import { SignUpResponse } from './models';
import { API } from '../../api';

export const AuthService = {
  login: async (username: string, password: string): Promise<string> => {
    const { data } = await API.put<string>(`/person/login?username=${username}&password=${password}`);
    return data;
  },

  register: async (username: string, password: string) => {},
  // await api.post<SignUpResponse>('register/', { username, password }).then((response) => response.data),
};

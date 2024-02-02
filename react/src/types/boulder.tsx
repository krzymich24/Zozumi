import { UserProfile } from './user';

export interface Boulder {
  id: number;
  grade: string;
  name: string;
  author: { id: number; person: UserProfile };
}

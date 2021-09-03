import { User } from './user';

export interface BlogPost {
    id: number;
    title: string;
    imageUrl: string;
    user: User;
    content: string;
}
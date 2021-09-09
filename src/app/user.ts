import { BlogPost } from "./blogPost";

export interface User {
    id: number;
    name: string;
    password: string;
    blogPostList?: BlogPost[];
    email: string;
}
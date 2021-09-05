import { BlogPost } from "./blogPost";

export interface Tag {
    id: number;
    name: string;
    blogPosts: BlogPost[]
}
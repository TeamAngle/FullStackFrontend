import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/blogPost';
import { BlogPostService } from 'src/app/services/blog-post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  apiServerUrl = "localhost:4200"
  blogs:BlogPost[];
  constructor(private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(){
    this.blogPostService.getBlogPosts().subscribe(
      blogPosts => this.blogs = blogPosts
    )
  }
}

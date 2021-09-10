import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogPost } from 'src/app/blogPost';
import { BlogPostService } from 'src/app/services/blog-post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  navigated = false;
  blogPost: BlogPost;
  username: String;

  constructor(private route: ActivatedRoute, private blogPostService:BlogPostService, private userService:UserService) { }

  ngOnInit(): void {
    this.route.params.forEach(
      (params: Params) => {
        if(params['id'] !== undefined) {
          const id = params['id'];
          this.navigated = true;
          console.log(id)
          this.getBlogPost(id);
          this.blogPost.content.replace('\\n', '<br />')
        }
      }
    )
  }

  getBlogPost(id: number): void {
    this.blogPostService.getBlogPost(id).subscribe(
      (response: BlogPost) => {
        this.blogPost = response;
        console.log(this.blogPost)
      }
    )
  }

}

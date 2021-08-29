import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BlogPost } from 'src/app/blogPost';
import { BlogPostService } from '../../services/blog-post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  blogList: BlogPost[];

  constructor(
    public app: AppComponent) { }

  ngOnInit() {
  }

  private filterBlogs(): void {
    this.blogList = [];
    for(let blog of this.app.blogs){
      if(blog.user.id === this.app.user.id){
        this.blogList.push(blog)
      }
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BlogPost } from 'src/app/blogPost';
import { BlogPostService } from '../../services/blog-post.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  blogList: BlogPost[];
  currentUser: User;

  constructor(
    private userService:UserService, 
    private app: AppComponent
    ) { }

  ngOnInit() {
   this.getCurrentUser()
  }

  // private filterBlogs(): void {
  //   this.blogList = [];
  //   for(let blog of this.app.blogs){
  //     if(blog.user.id === this.app.user.id){
  //       this.blogList.push(blog)
  //     }
  //   }
  // }

  getCurrentUser(){
    this.userService.getCurrentUser().subscribe(
      session => {
        this.userService.getUser(session.userId).subscribe(
            user => {
              this.currentUser = user;
              this.app.user = user;
              console.log(this.currentUser)
            }
        )
      }
    )
  }

}

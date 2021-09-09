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
  userImage: string = 'https://static.vecteezy.com/system/resources/thumbnails/000/661/657/small_2x/creative-lime-slice-popsicle.jpg';

  constructor(
    private userService:UserService, 
    private app: AppComponent,
    private blogService:BlogPostService
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
              this.userImage = user.userImage ? user.userImage : this.userImage;
            }
        )
      }
    )
  }

  onDelete(blog:BlogPost){
    console.log(blog)
    this.blogService.deleteBlogPost(blog.id).subscribe(
      post => console.log(post)
    )
  }

  onEdit(blog:BlogPost){
    console.log(blog)
    window.location.replace(`/editblog/${blog.id}`)
  }

  public updateUser(){
    this.userService.updateUser(this.currentUser, this.currentUser.id).subscribe(
     user => this.currentUser = user
    )
  }

}

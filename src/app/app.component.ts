import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './services/user.service';
import { BlogPostService } from './services/blog-post.service';
import { TagService } from './services/tag.service';
import { BlogPost } from './blogPost';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'employeemanagerapp';
  // public employees: Employee[];
  // public recipes: Recipe[];
  public user: User = {name: 'Not Logged In', id: null, password: null, blogPostList: []};
  public users: User[];
  public blogs: BlogPost[];

  constructor( 
    private userService: UserService,
    private blogPostService: BlogPostService,
    private tagService: TagService,
    private elementRef: ElementRef){}

  ngOnInit() {
    //this.getEmployees();
    //this.getRecipes();
    this.getUsers();
    this.getCurrentUser();
    // this.getBlogPosts();
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#8ca37e";
  }

  // public getEmployees(): void {
  //   this.empoloyeeService.getEmployees().subscribe(
  //     (response: Employee[]) => {
  //       this.employees = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message)
  //     }
  //   )
    
  // }

  public addUser(user: User): void {
    //document.getElementById('add-employee-form').click();
    this.userService.addUser(user).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        
      }
    );
  }

  

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
    
  }


  public getUser(userId: number, cb?): void {
    this.userService.getUser(userId).subscribe(
      (response: User) => {
        this.user = response;
        if(cb)
          cb()
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public getCurrentUser(): void {
    this.userService.getCurrentUser().subscribe(
      session => {
        if(session.userId == 0)
          return;
        this.getUser(session.userId);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public usernameExists(name: string): boolean{
    //this.getUsers();
    console.log(this.users);
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].name === name)
        return true;
    }
    return false;
  }

  public getBlogPosts(): void {
    this.blogPostService.getBlogPosts().subscribe(
      (response: BlogPost[]) => {
        this.blogs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )

  }

  public setCurrentUser(userId: number, cb): void {
    this.userService.updateCurrentUser({id: 0, userId: userId}).subscribe(
      ()=> cb()
    )
  }

}

import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { User } from './user';
import { RecipeService } from './services/recipe.service';
import { UserService } from './services/user.service';
import { BlogPostService } from './services/blog-post.service';
import { TagService } from './services/tag.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'employeemanagerapp';
  // public employees: Employee[];
  public recipes: Recipe[];
  public user: User;
  public users: User[];

  constructor( 
    private recipeService: RecipeService,
    private userService: UserService,
    private blogPostService: BlogPostService,
    private tagService: TagService,
    private elementRef: ElementRef){}

  ngOnInit() {
    //this.getEmployees();
    //this.getRecipes();
    this.getUsers();
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#7ea381";
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

  public getRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      (response: Recipe[]) => {
        this.recipes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
    
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

  public getUser(userId: number, cb): void {
    this.userService.getUser(userId).subscribe(
      (response: User) => {
        this.user = response;
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


}

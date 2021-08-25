import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'employeemanagerapp';
  // public employees: Employee[];
  public recipes: Recipe[];

  constructor(/*private empoloyeeService: EmployeeService,*/ private recipeService: RecipeService, private elementRef: ElementRef){}

  ngOnInit() {
    //this.getEmployees();
    //this.getRecipes();
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#C0CFEA";
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
}

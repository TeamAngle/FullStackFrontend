import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { EmployeeComponent } from './components/employee/employee.component';
// import { EmployeeService } from './services/employee.service';
import { RecipeComponent } from './components/recipe/recipe.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';

const approutes: Routes = [
  {path: '', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    // EmployeeComponent,
    RecipeComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule//,
    //RouterModule.forRoot(approutes)
  ],
  providers: [/*EmployeeService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }

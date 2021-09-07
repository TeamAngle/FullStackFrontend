import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { EmployeeComponent } from './components/employee/employee.component';
// import { EmployeeService } from './services/employee.service';
import { RecipeComponent } from './components/recipe/recipe.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { UserService } from './services/user.service';
import { TagService } from './services/tag.service';
import { BlogPostService } from './services/blog-post.service';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { SearchBlogComponent } from './components/search-blog/search-blog.component';

const approutes: Routes = [
  // {path: '', component: LoginComponent},
  {path: '', component:BlogsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'thankyou', component: ThankyouComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'newuser', component: NewuserComponent},
  {path: 'userhome', component:UserHomeComponent},
  {path: 'login', component:LoginComponent},
  // {path: 'bloglist', component:BlogsComponent},
  {path: 'blog/:id', component:BlogPageComponent},
  {path: 'createblog', component:CreateBlogComponent},
  {path: 'searchblogs', component:SearchBlogComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    // EmployeeComponent,
    RecipeComponent,
    LoginComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    BlogsComponent,
    ThankyouComponent,
    SidebarComponent,
    NewuserComponent,
    UserHomeComponent,
    FooterComponent,
    BlogPageComponent,
    UserSidebarComponent,
    CreateBlogComponent,
    SearchBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [UserService, TagService, BlogPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

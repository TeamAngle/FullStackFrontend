import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  users:Observable<User>[];
  name:string = "";
  email:string = "";
  password:string = "";

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.userExists())
      return;
    
    if(!this.hasNoEmptyFields()){
      alert("Please fill out all fields");
      return;
    }
    
    let user = <User> {
      name: this.name,
      password: this.password
    }
    console.log('creating user', user);
    this.app.addUser(user)
    window.location.replace('');
  }

  userExists(): boolean {
    if(this.app.usernameExists(this.name)){
      alert("Selected username already exists")
      return true;
    } 
    return false;
  }

  hasNoEmptyFields(): boolean{
    return this.name.length > 0 &&
    this.email.length > 0 &&
    this.password.length > 0;
  }

}

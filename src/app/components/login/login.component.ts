import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";
  constructor(private app: AppComponent) { }

  ngOnInit(): void {
  }

  onSubmit(){
   for(let i = 0; i < this.app.users.length; i++){
     if(this.app.users[i].name == this.username &&
      this.app.users[i].password == this.password){
        this.app.user = this.app.users[i];
        alert("Found that ass! You're the real deal!");
        console.log(this.app.user);
        window.location.replace('userhome');
        return;
      }

   } 
   alert("No account matching this username and password found. Please check your entries and try again.")
  }

}

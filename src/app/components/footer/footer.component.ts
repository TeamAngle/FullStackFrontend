import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
  }

  getUserText(){
    console.log(this.app.user)
    return this.app.user.name == "Not Logged In" ? "Login" : 'Logout: ' + this.app.user.name
  }

  

  onClick(){
    console.log('clicked link')
    if(this.app.user.name != "Not Logged In"){
      this.app.setCurrentUser(0, ()=>{window.location.replace('')});
    } else {
      window.location.replace('')
    }
  }
}

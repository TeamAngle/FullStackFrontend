import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  name:string;
  email:string;
  password:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(
      'clicked submit, name: ' + 
      this.name + '\n' +
      'email:' + 
      this.email + '\n' +
      'password:' + 
      this.password
    );
  }

}

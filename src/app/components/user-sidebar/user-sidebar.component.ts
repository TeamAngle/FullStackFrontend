import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserHomeComponent } from '../user-home/user-home.component';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  @Input() userImage;
  showChangeImage:boolean = false;
  changedImageUrl:string = "";
  
  constructor(public app: AppComponent, private userHome:UserHomeComponent) { }

  ngOnInit(): void {
  }

  onClick(){
    this.showChangeImage = !this.showChangeImage;
  }

  onChangeImage(){
    this.userHome.currentUser.userImage = this.changedImageUrl.length > 0 ? this.changedImageUrl : null;
    this.userHome.updateUser();
    this.showChangeImage = false;
  }

  getImageUrl(){
    return this.userHome.currentUser.userImage != null ? 
    this.userHome.currentUser.userImage :
    "https://static.vecteezy.com/system/resources/thumbnails/000/661/657/small_2x/creative-lime-slice-popsicle.jpg";
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private userSource = new BehaviorSubject<User>({name: 'Not Logged In', id: null, password: null});
  // currentUser = this.userSource.asObservable();

  // constructor() { }

  // changeUser(newUser: User){
  //   this.userSource.next(newUser);
  // }
}

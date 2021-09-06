import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user';
import { SessionObject } from '../sessionObject';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/userController/read`);
  }

  public getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/userController/read/${userId}`)
  }

  public updateCurrentUser(session: SessionObject): Observable<SessionObject> {
    return this.http.put<SessionObject>(`${this.apiServerUrl}/sessionController/update`, session);
  }

  public getCurrentUser(): Observable<SessionObject> {
    return this.http.get<SessionObject>(`${this.apiServerUrl}/sessionController/read`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/userController/create`, user)
  }

  public updateUser(user: User, userId: number): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/userController/update/${userId}`, user);
  }

  public deleteUser(userId: number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/userController/delete/${userId}`);
  }

}

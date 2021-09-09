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
  private apiServerUrl = 'us-cdbr-east-04.cleardb.com';//environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/userController/read`, { responseType: 'text' as 'json' });
  }

  public getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/userController/read/${userId}`, { responseType: 'text' as 'json' })
  }

  public updateCurrentUser(session: SessionObject): Observable<SessionObject> {
    return this.http.put<SessionObject>(`${this.apiServerUrl}/sessionController/update`, session, { responseType: 'text' as 'json' });
  }

  public getCurrentUser(): Observable<SessionObject> {
    return this.http.get<SessionObject>(`${this.apiServerUrl}/sessionController/read`, { responseType: 'text' as 'json' });
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/userController/create`, user, { responseType: 'text' as 'json' })
  }

  public updateUser(user: User, userId: number): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/userController/update/${userId}`, user, { responseType: 'text' as 'json' });
  }

  public deleteUser(userId: number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/userController/delete/${userId}`, { responseType: 'text' as 'json' });
  }

}

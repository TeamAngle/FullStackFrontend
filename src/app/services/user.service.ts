import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/userController/read`);
  }

  public addRecipe(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/userController/create`, user)
  }

  public updateRecipe(user: User, userId: number): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/userController/update/${userId}`, user);
  }

  public deleteRecipe(userId: number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/userController/delete/${userId}`);
  }
}

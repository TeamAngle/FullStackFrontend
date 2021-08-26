import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient  } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Tag } from '../tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.apiServerUrl}/recipeController/read`);
  }

  public addRecipe(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(`${this.apiServerUrl}/recipeController/create`, tag)
  }

  public updateRecipe(tag: Tag, tagId: number): Observable<Tag> {
    return this.http.put<Tag>(`${this.apiServerUrl}/recipeController/update/${tagId}`, tag);
  }

  public deleteRecipe(tagId: number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/recipeController/delete/${tagId}`);
  }
}

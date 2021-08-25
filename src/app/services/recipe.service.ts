import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient  } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Recipe } from '../recipe';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiServerUrl}/recipeController/read`);
  }

  public addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.apiServerUrl}/recipeController/create`, recipe)
  }

  public updateRecipe(recipe: Recipe, recipeId: number): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiServerUrl}/recipeController/update/${recipeId}`, recipe);
  }

  public deleteRecipe(recipeId: number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/recipeController/delete/${recipeId}`);
  }
}


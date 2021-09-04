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

  public getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.apiServerUrl}/tagController/read`);
  }

  public getTag(tagId: number): Observable<Tag> {
    return this.http.get<Tag>(`${this.apiServerUrl}/tagController/read/${tagId}`);
  }

  public addTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(`${this.apiServerUrl}/tagController/create`, tag)
  }

  public updateTag(tag: Tag, tagId: number): Observable<Tag> {
    return this.http.put<Tag>(`${this.apiServerUrl}/tagController/update/${tagId}`, tag);
  }

  public deleteTag(tagId: number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/tagController/delete/${tagId}`);
  }
}

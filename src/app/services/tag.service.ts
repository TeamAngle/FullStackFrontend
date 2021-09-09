import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient  } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Tag } from '../tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private apiServerUrl = 'us-cdbr-east-04.cleardb.com';//environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.apiServerUrl}/tagController/read`, { responseType: 'text' as 'json' });
  }

  public getTag(tagId: number): Observable<Tag> {
    return this.http.get<Tag>(`${this.apiServerUrl}/tagController/read/${tagId}`, { responseType: 'text' as 'json' });
  }

  public addTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(`${this.apiServerUrl}/tagController/create`, tag, { responseType: 'text' as 'json' })
  }

  public updateTag(tag: Tag, tagId: number): Observable<Tag> {
    return this.http.put<Tag>(`${this.apiServerUrl}/tagController/update/${tagId}`, tag, { responseType: 'text' as 'json' });
  }

  public deleteTag(tagId: number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/tagController/delete/${tagId}`, { responseType: 'text' as 'json' });
  }
}

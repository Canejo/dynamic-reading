import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ArticleEntity } from '../entity/article.entity';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(
    private _http: HttpClient
  ) { }

  getArticles(): Observable<ArticleEntity[]> {

    return this._http.get<ArticleEntity[]>(`${environment.apiUrl}/articles`);
  }

  getArticle(id: number): Observable<ArticleEntity> {
    return this._http.get<ArticleEntity>(`${environment.apiUrl}/articles/${id}`);
  }

  postArticle(articleEntity: ArticleEntity): Observable<ArticleEntity> {
    console.log('a');
    return this._http.post<ArticleEntity>(`${environment.apiUrl}/articles/${articleEntity.id}`, articleEntity);
  }
}

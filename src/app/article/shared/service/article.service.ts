import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ArticleEntity } from '../entity/article.entity';
import { select } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(
    private _http: HttpClient
  ) { }

  getArticles(): Observable<ArticleEntity[]> {
    return this._http.get<ArticleEntity[]>('http://localhost:3000/articles');
  }

  getArticle(id: number): Observable<ArticleEntity> {
    return this._http.get<ArticleEntity>(`http://localhost:3000/articles/${id}`);
  }
}

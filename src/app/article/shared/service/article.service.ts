import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ArticleEntity } from '../entity/article.entity';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(
    private _http: HttpClient
  ) { }

  getArticles(): Observable<ArticleEntity[]> {
    return this._http.get<ArticleEntity[]>('http://localhost:4200/assets/data/articles.json');
  }
}

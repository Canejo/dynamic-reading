import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { ArticleEntity } from '../entity/article.entity';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(
    private _http: HttpClient,
    private apollo: Apollo
  ) { }

  getArticles(filter: ArticleEntity): Observable<ArticleEntity[]> {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
      });
    let params = new HttpParams();
    if (filter) {
      for (const i in filter) {
        if (i) {
          params = params.append(i, filter[i]);
        }
      }
    }

    //return this._http.get<ArticleEntity[]>(`${environment.apiUrl}/api/v1/articles`, {params: params});
    return this._http.get<ArticleEntity[]>(`${environment.apiUrl}/articles`, {params: params});
  }

  getArticle(id: number): Observable<ArticleEntity> {
    //return this._http.get<ArticleEntity>(`${environment.apiUrl}/api/v1/articles/${id}`);
    return this._http.get<ArticleEntity>(`${environment.apiUrl}/articles/${id}`);
  }

  postArticle(articleEntity: ArticleEntity): Observable<ArticleEntity> {
    console.log('a');
    return this._http.post<ArticleEntity>(`${environment.apiUrl}/api/v1/articles/${articleEntity.id}`, articleEntity);
  }
}

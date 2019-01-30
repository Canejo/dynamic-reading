import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ConfigEntity } from '../entity/config.entity';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(
    private _http: HttpClient
  ) { }

  getConfig(): Observable<ConfigEntity> {
    return this._http.get<ConfigEntity>(`${environment.apiUrl}/api/v1/config`);
  }

  postConfig(configEntity: ConfigEntity): Observable<ConfigEntity> {
    return this._http.post<ConfigEntity>(`${environment.apiUrl}/api/v1/config`, configEntity);
  }
}

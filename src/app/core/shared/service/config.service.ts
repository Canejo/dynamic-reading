import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ConfigEntity } from '../entity/config.entity';
import { environment } from './../../../../environments/environment';
import { ISystemConfig } from '../entity/system-config.entity';
import { SystemGraphql } from '../graphql/query/system.graphql';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  constructor(
    private http: HttpClient,
    private systemGraphql: SystemGraphql
  ) { }

  getConfig(): Observable<ConfigEntity> {
    return this.http.get<ConfigEntity>(`${environment.apiUrl}/api/v1/config`);
  }

  postConfig(configEntity: ConfigEntity): Observable<ConfigEntity> {
    return this.http.post<ConfigEntity>(`${environment.apiUrl}/api/v1/config`, configEntity);
  }

  getSystemConfig(): Observable<ISystemConfig> {
    return this.systemGraphql
        .watch().valueChanges.pipe(
          map((result: any) => result.data.system as ISystemConfig)
        );
  }
}

import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { ISystemConfig } from '../../entity/system-config.entity';

@Injectable()
export class SystemGraphql extends Query<ISystemConfig> {

  document = gql`
    query {
      system {
        name
        urlWeb
        urlWebApi
        environment
        version
        pocketKey
      }
    }
  `;
}

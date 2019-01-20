import { Injectable } from '@angular/core';

@Injectable()
export class ArticleTextService {

  constructor() { }

  textToArray(value: string) {
    return value.split(/\s+/).filter(n => n);
  }
}

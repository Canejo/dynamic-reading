import { TestBed, async } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { AppModule } from './../../../app.module';
import { ArticleModule } from '../../article.module';

describe('ArticleService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        ArticleModule
      ]
    });
  }));

  it('should be created', () => {
    const service: ArticleService = TestBed.get(ArticleService);
    expect(service).toBeTruthy();
  });
});

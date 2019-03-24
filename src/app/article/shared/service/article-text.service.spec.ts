import { TestBed, async } from '@angular/core/testing';

import { ArticleTextService } from './article-text.service';
import { AppModule } from './../../../app.module';
import { ArticleModule } from '../../article.module';

describe('ArticleTextService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        ArticleModule
      ]
    });
  }));

  it('should be created', () => {
    const service: ArticleTextService = TestBed.get(ArticleTextService);
    expect(service).toBeTruthy();
  });
});

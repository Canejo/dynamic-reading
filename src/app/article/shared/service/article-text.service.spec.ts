import { TestBed } from '@angular/core/testing';

import { ArticleTextService } from './article-text.service';

describe('ArticleTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleTextService = TestBed.get(ArticleTextService);
    expect(service).toBeTruthy();
  });
});

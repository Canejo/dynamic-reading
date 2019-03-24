import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFavoriteContainerComponent } from './article-favorite-container.component';
import { AppModule } from './../../../app.module';
import { ArticleModule } from '../../article.module';

describe('ArticleFavoriteContainerComponent', () => {
  let component: ArticleFavoriteContainerComponent;
  let fixture: ComponentFixture<ArticleFavoriteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        ArticleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFavoriteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

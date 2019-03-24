import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListContainerComponent } from './article-list-container.component';
import { AppModule } from './../../../app.module';
import { ArticleModule } from '../../article.module';

describe('ArticleListContainerComponent', () => {
  let component: ArticleListContainerComponent;
  let fixture: ComponentFixture<ArticleListContainerComponent>;

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
    fixture = TestBed.createComponent(ArticleListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContainerComponent } from './article-container.component';
import { AppModule } from './../../../app.module';
import { ArticleModule } from '../../article.module';

describe('ArticleContainerComponent', () => {
  let component: ArticleContainerComponent;
  let fixture: ComponentFixture<ArticleContainerComponent>;

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
    fixture = TestBed.createComponent(ArticleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

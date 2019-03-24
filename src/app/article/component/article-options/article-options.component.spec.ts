import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOptionsComponent } from './article-options.component';
import { AppModule } from './../../../app.module';
import { ArticleModule } from '../../article.module';

describe('ArticleOptionsComponent', () => {
  let component: ArticleOptionsComponent;
  let fixture: ComponentFixture<ArticleOptionsComponent>;

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
    fixture = TestBed.createComponent(ArticleOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleReadComponent } from './article-read.component';
import { AppModule } from './../../../app.module';
import { ArticleModule } from '../../article.module';

describe('ArticleReadComponent', () => {
  let component: ArticleReadComponent;
  let fixture: ComponentFixture<ArticleReadComponent>;

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
    fixture = TestBed.createComponent(ArticleReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

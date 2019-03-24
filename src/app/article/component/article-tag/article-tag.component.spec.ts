import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTagComponent } from './article-tag.component';
import { AppModule } from './../../../app.module';
import { ArticleModule } from '../../article.module';

describe('ArticleTagComponent', () => {
  let component: ArticleTagComponent;
  let fixture: ComponentFixture<ArticleTagComponent>;

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
    fixture = TestBed.createComponent(ArticleTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

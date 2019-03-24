import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleReadContainerComponent } from './article-read-container.component';
import { AppModule } from './../../../app.module';
import { ArticleModule } from '../../article.module';

describe('ArticleReadContainerComponent', () => {
  let component: ArticleReadContainerComponent;
  let fixture: ComponentFixture<ArticleReadContainerComponent>;

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
    fixture = TestBed.createComponent(ArticleReadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

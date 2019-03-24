import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleArchiveContainerComponent } from './article-archive-container.component';
import { AppModule } from './../../../app.module';
import { ArticleModule } from '../../article.module';

describe('ArticleArchiveContainerComponent', () => {
  let component: ArticleArchiveContainerComponent;
  let fixture: ComponentFixture<ArticleArchiveContainerComponent>;

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
    fixture = TestBed.createComponent(ArticleArchiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

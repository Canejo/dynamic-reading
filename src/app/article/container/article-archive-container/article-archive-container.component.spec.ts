import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleArchiveContainerComponent } from './article-archive-container.component';

describe('ArticleArchiveContainerComponent', () => {
  let component: ArticleArchiveContainerComponent;
  let fixture: ComponentFixture<ArticleArchiveContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleArchiveContainerComponent ]
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

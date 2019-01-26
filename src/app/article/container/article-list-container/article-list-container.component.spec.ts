import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListContainerComponent } from './article-list-container.component';

describe('ArticleListContainerComponent', () => {
  let component: ArticleListContainerComponent;
  let fixture: ComponentFixture<ArticleListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleListContainerComponent ]
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

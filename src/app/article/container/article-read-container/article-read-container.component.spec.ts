import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleReadContainerComponent } from './article-read-container.component';

describe('ArticleReadContainerComponent', () => {
  let component: ArticleReadContainerComponent;
  let fixture: ComponentFixture<ArticleReadContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleReadContainerComponent ]
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

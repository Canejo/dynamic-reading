import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTagModalComponent } from './article-tag-modal.component';

describe('ArticleTagModalComponent', () => {
  let component: ArticleTagModalComponent;
  let fixture: ComponentFixture<ArticleTagModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleTagModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTagModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

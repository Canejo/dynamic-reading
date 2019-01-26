import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOptionsComponent } from './article-options.component';

describe('ArticleOptionsComponent', () => {
  let component: ArticleOptionsComponent;
  let fixture: ComponentFixture<ArticleOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleOptionsComponent ]
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

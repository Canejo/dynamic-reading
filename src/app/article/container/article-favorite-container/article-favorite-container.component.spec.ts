import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFavoriteContainerComponent } from './article-favorite-container.component';

describe('ArticleFavoriteContainerComponent', () => {
  let component: ArticleFavoriteContainerComponent;
  let fixture: ComponentFixture<ArticleFavoriteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFavoriteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFavoriteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

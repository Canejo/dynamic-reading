import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ArticleTagModalComponent } from './article-tag-modal.component';
import { AppModule } from './../../../app.module';
import { ArticleModule } from './../../article.module';

describe('ArticleTagModalComponent', () => {
  let component: ArticleTagModalComponent;
  let fixture: ComponentFixture<ArticleTagModalComponent>;
  const activeModal = new NgbActiveModal();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        ArticleModule
      ],
      providers: [
        { provide: NgbActiveModal, useValue: activeModal }
      ]
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

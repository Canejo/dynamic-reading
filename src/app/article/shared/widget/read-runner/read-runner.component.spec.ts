import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from './../../../../app.module';
import { ArticleModule } from './../../../article.module';
import { ReadRunnerComponent } from './read-runner.component';

describe('ReadRunnerComponent', () => {
  let component: ReadRunnerComponent;
  let fixture: ComponentFixture<ReadRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        ArticleModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

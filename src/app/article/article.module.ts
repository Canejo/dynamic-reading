import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadRunnerComponent } from './shared/widget/read-runner/read-runner.component';
import { ArticleReadComponent } from './article-read/article-read.component';
import { ArticleRoutingModule } from './article-routing.module';
import { TimeToCompletePipe } from './shared/pipe/time-to-complete.pipe';
import { ArticleTextService } from './shared/service/article-text.service';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  declarations: [
    ReadRunnerComponent,
    ArticleReadComponent,
    TimeToCompletePipe,
    ArticleListComponent
  ],
  exports: [
  ],
  providers: [
    ArticleTextService
  ]
})
export class ArticleModule { }

import { MomentModule } from 'ngx-moment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadRunnerComponent } from './shared/widget/read-runner/read-runner.component';
import { ArticleReadComponent } from './article-read/article-read.component';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MomentModule
  ],
  declarations: [
    ReadRunnerComponent,
    ArticleReadComponent
  ],
  exports: [
  ]
})
export class ArticleModule { }

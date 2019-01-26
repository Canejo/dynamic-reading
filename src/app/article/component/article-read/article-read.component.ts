import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleEntity } from './../../shared/entity/article.entity';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.scss']
})
export class ArticleReadComponent implements OnInit {

  @Input() article: ArticleEntity;
  @Input() speed: number;
  @Output() start = new EventEmitter();
  @Output() pause = new EventEmitter<number>();
  @Output() finish = new EventEmitter();
  @Output() loading = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {
  }
}

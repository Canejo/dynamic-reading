import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleEntity } from '../../shared/entity/article.entity';

@Component({
  selector: 'app-article-options',
  templateUrl: './article-options.component.html',
  styleUrls: ['./article-options.component.scss']
})
export class ArticleOptionsComponent implements OnInit {

  @Input() article: ArticleEntity;
  @Output() archive = new EventEmitter<ArticleEntity>();
  @Output() remove = new EventEmitter<ArticleEntity>();
  @Output() tag = new EventEmitter<ArticleEntity>();
  @Output() favorite = new EventEmitter<ArticleEntity>();

  constructor() { }

  ngOnInit() {
  }

}

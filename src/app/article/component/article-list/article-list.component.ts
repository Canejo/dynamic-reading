import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleEntity } from '../../shared/entity/article.entity';
import { ConfigEntity } from '../../../core/shared/entity/config.entity';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() articles: ArticleEntity[];
  @Input() config: ConfigEntity;

  @Output() navigateToArticle: EventEmitter<ArticleEntity> = new EventEmitter();

  @Output() archive = new EventEmitter<ArticleEntity>();
  @Output() remove = new EventEmitter<ArticleEntity>();
  @Output() tag = new EventEmitter<ArticleEntity>();
  @Output() favorite = new EventEmitter<ArticleEntity>();

  constructor() { }

  ngOnInit() {
  }

}

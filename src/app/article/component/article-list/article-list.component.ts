import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleEntity } from '../../shared/entity/article.entity';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() articles: ArticleEntity[];
  @Output() navigateToArticle: EventEmitter<ArticleEntity> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

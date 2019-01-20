import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { ArticleEntity } from '../shared/entity/article.entity';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Observable<ArticleEntity[]>;

  constructor() { }

  ngOnInit() {
    this.articles = of([{
      id: 1,
      title: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum et velit sit amet pharetra. Aenean consectetur quam nisl, sed.',
      index: 0
    }]);
  }

}

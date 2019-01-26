import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ArticleEntity } from './../../shared/entity/article.entity';
import { ConfigEntity } from '../../../core/shared/entity/config.entity';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.scss']
})
export class ArticleReadComponent implements OnInit {

  @Input() article: ArticleEntity;
  @Input() config: ConfigEntity;
  @Output() start = new EventEmitter();
  @Output() pause = new EventEmitter<ArticleEntity>();
  @Output() finish = new EventEmitter();
  @Output() loading = new EventEmitter();
  @Output() changeSpeed = new EventEmitter<number>();

  @Output() back = new EventEmitter();

  @Output() archive = new EventEmitter<ArticleEntity>();
  @Output() remove = new EventEmitter<ArticleEntity>();
  @Output() tag = new EventEmitter<ArticleEntity>();
  @Output() favorite = new EventEmitter<ArticleEntity>();

  constructor(
  ) { }

  ngOnInit() {
  }

  OnPause(index: number) {
    if (this.article) {
      this.article.index = index;
      this.pause.emit(this.article);
    }
  }

  OnChangeSpeed(speed: number) {
    if (this.config && this.config.speedRead !== speed) {
      this.changeSpeed.emit(speed);
    }
  }

  OnBack() {
    this.back.emit();
  }

  OnArchive() {
    this.archive.emit();
  }

  OnRemove() {
    this.remove.emit();
  }

  OnTag() {
    this.tag.emit();
  }

  OnFavorite() {
    this.favorite.emit();
  }
}

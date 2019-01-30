import { TagEntity } from './../../shared/entity/tag.entity';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ArticleEntity } from '../../shared/entity/article.entity';

@Component({
  selector: 'app-article-tag',
  templateUrl: './article-tag.component.html',
  styleUrls: ['./article-tag.component.scss']
})
export class ArticleTagComponent implements OnInit {

  @Input() article: ArticleEntity;
  @Input() activeModal: NgbActiveModal;

  @Output() salvar = new EventEmitter<ArticleEntity>();

  tags: TagEntity[];

  constructor() { }

  ngOnInit() {
    this.tags = this.article.tags;
  }

  onSalvar() {
    this.salvar.emit(this.article);
  }
}

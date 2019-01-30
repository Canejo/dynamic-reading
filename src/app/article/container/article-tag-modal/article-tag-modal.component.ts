import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ArticleEntity } from './../../shared/entity/article.entity';
import { ButtonLoadingService } from 'src/app/layout/component/button-loading/service/button-loading.service';
import { IArticleState } from '../../store/state/article.state';
import { PostArticle } from '../../store/actions/article.actions';

@Component({
  selector: 'app-article-tag-modal',
  templateUrl: './article-tag-modal.component.html',
  styleUrls: ['./article-tag-modal.component.scss']
})
export class ArticleTagModalComponent implements OnInit {

  @Input() article: ArticleEntity;

  constructor(
    public activeModal: NgbActiveModal,
    private _storeArticle: Store<IArticleState>,
    private _buttonLoadingService: ButtonLoadingService
  ) { }

  ngOnInit() {
  }

  salvar(article: ArticleEntity) {
    //this._storeArticle.dispatch(new PostArticle(article));
    this._buttonLoadingService.processando('btnSalvarTag');
    //this.activeModal.close();
  }

}

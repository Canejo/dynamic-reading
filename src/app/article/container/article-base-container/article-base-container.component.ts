import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ArticleEntity } from './../../shared/entity/article.entity';
import { IArticleState } from '../../store/state/article.state';
import { PostArticle } from '../../store/actions/article.actions';
import { ModalContentService } from './../../../layout/component/modal-content/service/modal-content.service';
import { ArticleTagModalComponent } from '../article-tag-modal/article-tag-modal.component';

export abstract class ArticleBaseContainerComponent {

  abstract posArchive(article: ArticleEntity): void;
  abstract posRemove(article: ArticleEntity): void;

  constructor(
    public storeArticle: Store<IArticleState>,
    private _modalContentService: ModalContentService
  ) {
  }

  onArchive(article: ArticleEntity) {
    article.archive = true;
    article.favorite = false;
    this.storeArticle.dispatch(new PostArticle(article));
    this.posArchive(article);
  }

  onRemove(article: ArticleEntity) {
    this._modalContentService.show({
      message: 'Ao clicar em remover o artigo não será mais possível recuperá-lo?',
      hideHeader: true,
      buttons: [
        {
          name: 'Não',
          class: 'btn btn-light'
        },
        {
          name: 'Sim, remover artigo',
          class: 'btn btn-danger',
          click: of(true).pipe(map(() => this.posRemove(article)))
        }
      ]
    });

  }

  onTag(article: ArticleEntity) {
    this._modalContentService.show({
      content: ArticleTagModalComponent,
      parameters: {
        article: article
      }
    });
  }

  onFavorite(article: ArticleEntity) {
    article.archive = false;
    article.favorite = true;
    this.storeArticle.dispatch(new PostArticle(article));
  }
}

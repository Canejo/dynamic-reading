import { Store } from '@ngrx/store';

import { ArticleEntity } from './../../shared/entity/article.entity';
import { IArticleState } from '../../store/state/article.state';
import { PostArticle } from '../../store/actions/article.actions';

export abstract class ArticleBaseContainerComponent {

  abstract posArchive(article: ArticleEntity): void;
  abstract posRemove(article: ArticleEntity): void;

  constructor(
    public storeArticle: Store<IArticleState>,
  ) {
  }

  onArchive(article: ArticleEntity) {
    article.archive = true;
    article.favorite = false;
    this.storeArticle.dispatch(new PostArticle(article));
    this.posArchive(article);
  }

  onRemove(article: ArticleEntity) {
    this.posRemove(article);
  }

  onTag(article: ArticleEntity) {

  }

  onFavorite(article: ArticleEntity) {
    article.archive = false;
    article.favorite = true;
    this.storeArticle.dispatch(new PostArticle(article));
  }
}

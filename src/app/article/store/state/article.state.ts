import { ArticleEntity } from '../../shared/entity/article.entity';
import { IAppState } from 'src/app/store/state/app.state';

export interface IArticleState extends IAppState {
  articles: ArticleEntity[];
  selectedArticle: ArticleEntity;
}

export const initialArticleState: IArticleState = {
  articles: null,
  selectedArticle: null
};

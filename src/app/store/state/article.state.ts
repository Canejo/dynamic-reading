import { ArticleEntity } from './../../article/shared/entity/article.entity';

export interface IArticleState {
  articles: ArticleEntity[];
  selectedArticle: ArticleEntity;
}

export const initialArticleState: IArticleState = {
  articles: null,
  selectedArticle: null
};

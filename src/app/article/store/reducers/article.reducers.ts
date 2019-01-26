import { initialArticleState, IArticleState } from '../state/article.state';
import { ArticleActions, EArticleActions } from '../actions/article.actions';

export const articleReducers = (
  state = initialArticleState,
  action: ArticleActions
): IArticleState => {
  switch (action.type) {
    case EArticleActions.GetArticlesSuccess: {
      return {
        ...state,
        articles: action.payload
      };
    }
    case EArticleActions.GetArticleSuccess: {
      return {
        ...state,
        selectedArticle: action.payload
      };
    }
    case EArticleActions.PostArticleSuccess: {
      return {
        ...state,
        selectedArticle: action.payload
      };
    }

    default:
      return state;
  }
};

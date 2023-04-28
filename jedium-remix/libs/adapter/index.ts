import { ArticleTagRepository } from './articles-tags.repository';

function buildRepository() {
  return {
    ArticlesAndTags: { ...ArticleTagRepository() },
  };
}

export const Repository = buildRepository();
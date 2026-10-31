import { BlogPost, BlogFilterParams, PaginatedPostsResult } from './types';
import { getPublishedPosts, searchPosts, getPostsByCategory } from './posts';

const DEFAULT_PAGE_SIZE = 6;

/**
 * Execute a filtered and paginated query across published posts.
 */
export function queryPosts(params: BlogFilterParams = {}): PaginatedPostsResult {
  const { categorySlug, query, page = 1, pageSize = DEFAULT_PAGE_SIZE } = params;

  let results: readonly BlogPost[] = [];

  if (query && query.trim()) {
    results = searchPosts(query, categorySlug);
  } else if (categorySlug) {
    results = getPostsByCategory(categorySlug);
  } else {
    results = getPublishedPosts();
  }

  const totalCount = results.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (safePage - 1) * pageSize;
  const paginatedPosts = results.slice(startIndex, startIndex + pageSize);

  return {
    posts: paginatedPosts,
    totalCount,
    currentPage: safePage,
    totalPages,
    hasNextPage: safePage < totalPages,
    hasPrevPage: safePage > 1,
  };
}

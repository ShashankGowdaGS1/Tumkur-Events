/**
 * Centralized Type Definitions for the Celebration Journal & Blog System
 * Route: /blog and /blog/category/[slug]
 */

export interface BlogCategory {
  readonly id: string;
  readonly slug: string;
  readonly number: string;
  readonly displayName: string;
  readonly shortName: string;
  readonly description: string;
  readonly editorialImage: string;
  readonly editorialImageAlt: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
}

export type PostStatus = 'published' | 'draft';

export interface BlogPost {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly categorySlug: string;
  readonly coverImage: string;
  readonly coverImageAlt: string;
  readonly publishedAt: string | null;
  readonly updatedAt?: string | null;
  readonly author: {
    readonly name: string;
    readonly role: string;
  };
  readonly readingTime: string;
  readonly status: PostStatus;
  readonly featured: boolean;
  readonly tags?: readonly string[];
}

export interface BlogFilterParams {
  readonly categorySlug?: string;
  readonly query?: string;
  readonly page?: number;
  readonly pageSize?: number;
}

export interface PaginatedPostsResult {
  readonly posts: readonly BlogPost[];
  readonly totalCount: number;
  readonly currentPage: number;
  readonly totalPages: number;
  readonly hasNextPage: boolean;
  readonly hasPrevPage: boolean;
}

/**
 * Centralized Type Definitions for the Celebration Journal & Blog System
 * Routes: /blog, /blog/category/[slug], and /blog/[slug]
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

export type CalloutType = 'tip' | 'note' | 'consideration' | 'inspiration';

export interface ArticleCallout {
  readonly type: CalloutType;
  readonly title: string;
  readonly text: string;
}

export interface ArticleQuote {
  readonly text: string;
  readonly author?: string;
  readonly role?: string;
}

export interface ArticleList {
  readonly title?: string;
  readonly type: 'bullet' | 'ordered';
  readonly items: readonly string[];
}

export interface ArticleInlineImage {
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
  readonly aspectRatio?: '16:9' | '4:3' | 'wide' | 'standard';
  readonly layout?: 'standard' | 'wide' | 'split';
  readonly secondaryImage?: {
    readonly src: string;
    readonly alt: string;
    readonly caption?: string;
  };
}

export interface ArticleTable {
  readonly caption?: string;
  readonly headers: readonly string[];
  readonly rows: readonly (readonly string[])[];
}

export interface ArticleSection {
  readonly id: string;
  readonly heading: string;
  readonly subheading?: string;
  readonly paragraphs: readonly string[];
  readonly lists?: readonly ArticleList[];
  readonly quote?: ArticleQuote;
  readonly callout?: ArticleCallout;
  readonly inlineImage?: ArticleInlineImage;
  readonly table?: ArticleTable;
}

export interface ArticleFAQ {
  readonly question: string;
  readonly answer: string;
}

export interface ArticleConclusion {
  readonly summary: string;
  readonly closingThought?: string;
  readonly relatedEventHref?: string;
  readonly relatedEventLabel?: string;
}

export interface TableOfContentsItem {
  readonly id: string;
  readonly title: string;
  readonly level: 2 | 3;
}

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
    readonly avatar?: string;
  };
  readonly readingTime: string;
  readonly status: PostStatus;
  readonly featured: boolean;
  readonly tags?: readonly string[];
  readonly dropCap?: boolean;
  readonly sections?: readonly ArticleSection[];
  readonly faqs?: readonly ArticleFAQ[];
  readonly conclusion?: ArticleConclusion;
  readonly tableOfContents?: readonly TableOfContentsItem[];
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

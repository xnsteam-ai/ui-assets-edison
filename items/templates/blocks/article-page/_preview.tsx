"use client";

import { ArticlePage, type ArticlePageProps } from "./article-page";

export function Preview(props: ArticlePageProps) {
  return <ArticlePage className="h-full" {...props} />;
}

export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
  quote?: string;
  content: string;
};
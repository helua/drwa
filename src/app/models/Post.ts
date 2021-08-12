export interface Post {
  createdAt: Date;
  url?: string;
  categories?: string;
  body?: string;
  image: string;
  title: string;
  slug: string;
  author?: string;

}

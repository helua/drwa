export interface Image {

    indexOf: string;
    source: string;
}

export interface Product {
  title: string;
  slug: string;
  images: Image[];
}

export type ProductType = {
  id: number;
  product_name: string;
  slug: string;
  description: string;
  isFeatured: boolean;
  origin: string;
  price: number;
  brand: {
    brand_name: string
  }
  images: {
    id: number;
    url: string;
  }[];
  sub_category: {
    slug: string;
    sub_category_name: string;
  };
};
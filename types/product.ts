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
  sub_sub_category: {
    sub_category:{
      categories: Array<{
        category_name: string
      }>;
    },
    slug: string;
    sub_sub_category_name: string;
  };
};
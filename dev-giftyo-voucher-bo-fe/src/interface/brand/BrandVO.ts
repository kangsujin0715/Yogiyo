export interface Brand {
  code: string;
  name: string;
  menuCategoryCode: string;
  imgUrl?: string;
  linkUrl?: string;
  parent?: Brand;
}

export interface BrandSearchPayload {
  code?: string;
  name?: string;
  menuCategoryCode?: string;
}

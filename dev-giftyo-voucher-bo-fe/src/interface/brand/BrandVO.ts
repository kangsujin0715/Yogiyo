import { ReactNode } from 'react';

export interface Brand {
  no?: number;
  code: string;
  name: string | ReactNode;
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

import { Pagination, PaginationSearchParams } from 'src/interface/Pagination';

type FilterFormType = 'input' | 'select' | 'date';

export interface FilterFormSelectType {
  tag: string;
  title: string;
}

/**
 * 상품관리 기본상품 목록 검색 필터
 */
export interface ProductSearchFilter extends PaginationSearchParams {
  codeNum: string;
  productName: string;
  productType: string;
  brand: string;
  price: string;
  amount: string;
  state: string;
  date: string;
}

/**
 * 상품관리 기본상품 필터 데이터 타입
 */
export interface ProductFilterFormsDataType {
  value: string;
  name: string;
  type: FilterFormType;
  menus: FilterFormSelectType[];
}

export interface ProductData {
  id: number;
  codeNum: string;
  productName: string;
  productType: string;
  brand: string;
  price: string;
  amount: string;
  state: string;
  date: string;
}

export interface ProductSearchResponse {
  list: ProductData[];
  pagination: Pagination;
}

export interface ProductDetailParam {
  productNum: string;
}

export interface ProductDetailData {
  productNum: string;
  date: string;
}

export interface ProductDetailResponse {
  data: ProductDetailData;
}

export interface PaginationSearchParams {
  size: number;
  page: number;
}

export interface Pagination {
  last: boolean;
  first: boolean;
  totalElements: number;
  start: number;
  end: number;
  size: number;
  curPage: number;
}

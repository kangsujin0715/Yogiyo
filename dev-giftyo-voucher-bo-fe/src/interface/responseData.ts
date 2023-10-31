export interface FEApiResponse<T> {
  code: string;
  message: string;
  data: T;
}

export interface BEApiResponse<T> {
  ResultCd: string;
  ResultMsg: string;
  ResultData: T;
}

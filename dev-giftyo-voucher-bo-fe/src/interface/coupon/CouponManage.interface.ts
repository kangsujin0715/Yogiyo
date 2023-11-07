import { Pagination, PaginationSearchParams } from 'src/interface/Pagination';

export interface CouponData {
  id: number;
  issueNum: string;
  couponNum: string;
  receiverNum: string;
  productName: string;
  couponType: string;
  useYn: string;
  sellChannel: string;
  formType: string;
  formName: string;
  productType: string;
  date: string;
}

export interface CouponSearchResponse {
  list: CouponData[];
  pagination: Pagination;
}

export interface CouponSearchFilter extends PaginationSearchParams {
  issueNum: string;
  couponNum: string;
  receiverNum: string;
  couponType: string;
  useYn: string;
  sellingChannel: string;
  formType: string;
  formName: string;
  productType: string;
  date: string;
}

export interface CouponDetailSendHistoryParam {
  couponNum: string;
}

export interface CouponSendHistoryData {
  id: number;
  sendType: string;
  sendWay: string;
  sendResult: string;
  sendNum: string;
  recievNum: string;
  sendDate: string;
  manager: string;
  date: string;
  reason: string;
  info: string;
}

export interface CouponSendHistoryResponse {
  list: CouponSendHistoryData[];
  pagination: Pagination;
}

export interface CouponDetailParam {
  couponNum: string;
}

/**
 * 쿠폰상세정보 data
 */
export interface CouponDetailData {
  couponNum: string;
  date: string;
}

export interface CouponDetailResponse {
  data: CouponDetailData;
}

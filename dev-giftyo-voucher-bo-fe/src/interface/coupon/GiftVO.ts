import { PaginationSearchParams } from 'src/interface/Pagination';

export interface Coupon {
  servMenuIdx: number;
  defMenuIdx: number;
  servIdx: number;
  menuCategoryCode: number;
  orderCodeIdx: number;
  servMenuName: string;
  linkUrl?: string;
  couponType?: string;
  couponCode?: string;
  servCode?: string;
  servPwd?: string;
  compCode?: string;
  compName?: string;
  menuCode?: string;
  useTerm: number;
  useLimit?: string;
  useArea?: string;
  useNote?: string;
  useDetail?: string;
  imgPath: string;
  selPrice: number;
  usePrice: number;
  orderCompId?: string;
  sercurityKey?: string;
  discountRate: number;
  bestYn?: string;
  newYn?: string;
  saleStartDay?: string;
  saleEndDay?: string;
  refundMethod?: string;
  termInfo?: string;
  orderCnt: number;
  couponOrderCnt: number;
  orderMaxCnt: number;
  saleLimitCnt: number;
  filler01?: string;
  filler02?: string;
  limitYn?: string;
  memIdMaxCnt: number;
  dayOrderCnt: number;
  orderCompleteMsg?: string;
  jcoupon?: string;
}

export interface CouponSearchPayload extends PaginationSearchParams {
  menuCategoryCode?: number;
  couponCode?: string;
  compName?: string;
  servMenuName?: string;
}

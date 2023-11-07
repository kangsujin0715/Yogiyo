import { feAxios } from 'src/net/customAxios';
import { toQueryParams } from 'src/common/utils/commonUtils';
import { Coupon } from 'src/interface/coupon/GiftVO';
import {
  CouponDetailParam,
  CouponDetailResponse,
  CouponDetailSendHistoryParam,
  CouponSearchFilter,
  CouponSearchResponse,
  CouponSendHistoryResponse,
} from 'src/interface/coupon/CouponManage.interface';

const COUPON_API_PATH = '/api/voucher/coupon/manage';
export const CouponService = {
  /**
   *
   * 쿠폰 목록 조회
   * @param {CouponSearchFilter} params
   * @returns {Promise<CouponSearchResponse>}
   * @author jockbal@coopnc.com
   * @since 2023.11.03
   */
  getCouponList: async (params: CouponSearchFilter): Promise<CouponSearchResponse> => {
    console.log('getCouponList', params);
    return feAxios.get(`${COUPON_API_PATH}/search?${toQueryParams(params)}`);
  },

  /**
   *
   * 쿠폰 상세 발송내역 목록 호출
   * @param {CouponDetailSendHistoryParam} params
   * @returns {Promise<CouponSendHistoryResponse>}
   * @author jockbal@coopnc.com
   * @since 2023.11.03
   */
  getCouponDetailSendList: async (
    params: CouponDetailSendHistoryParam
  ): Promise<CouponSendHistoryResponse> => {
    console.log('getCouponDetailSendList', params);
    return feAxios.get(`${COUPON_API_PATH}/sendHistory?${toQueryParams(params)}`);
  },

  /**
   *
   * 쿠폰 상세 정보
   * @param {CouponDetailSendHistoryParam} params
   * @returns {Promise<CouponSearchResponse>}
   * @author jockbal@coopnc.com
   * @since 2023.11.03
   */
  getCouponDetailInfo: async (params: CouponDetailParam): Promise<CouponDetailResponse> => {
    console.log('getCouponDetailInfo', params);
    return feAxios.get(`${COUPON_API_PATH}/detail/detailInfo?${toQueryParams(params)}`);
  },

  /**
   * 쿠폰 상세 조회
   * @param {number} id
   * @returns {Promise<Coupon>}
   * @author yhju@coopnc.com
   * @since 2023.10.18
   */
  getCoupon: (id: number): Promise<Coupon> => feAxios.get(`${COUPON_API_PATH}/${id}`),

  /**
   * 쿠폰 등록
   * @param {Coupon} coupon
   * @returns {Promise<boolean>}
   * @author yhju@coopnc.com
   * @since 2023.10.18
   */
  postCoupon: (coupon: Coupon): Promise<boolean> =>
    feAxios.post(`${COUPON_API_PATH}/${coupon.servMenuIdx}`, coupon),

  /**
   * 쿠폰 수정
   * @param {Coupon} coupon
   * @returns {Promise<boolean>}
   * @author yhju@coopnc.com
   * @since 2023.10.18
   */
  updateCoupon: (coupon: Coupon): Promise<boolean> =>
    feAxios.patch(`${COUPON_API_PATH}/${coupon.servMenuIdx}`, coupon),
};

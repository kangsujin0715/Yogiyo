import { feAxios } from 'src/net/customAxios';
import { toQueryParams } from 'src/common/utils/commonUtils';
import { Coupon, CouponSearchPayload } from 'src/interface/coupon/GiftVO';

const COUPON_API_PATH = '/api/coupon';
export const CouponService = {
  /**
   * 쿠폰 목록 조회
   * @param {CouponSearchPayload} payload
   * @returns {Promise<Coupon[]>}
   * @author yhju@coopnc.com
   * @since 2023.10.18
   */
  getCouponList: (payload?: CouponSearchPayload): Promise<Coupon[]> =>
    feAxios.get(`${COUPON_API_PATH}/list?${toQueryParams(payload)}`),

  /**
   * 쿠폰 상세 조회
   * @param {number} id
   * @returns {Promise<Coupon>}
   * @author yhju@coopnc.com
   * @since 2023.10.18
   */
  getCoupon: (id: number): Promise<Coupon> =>
    feAxios.get(`${COUPON_API_PATH}/${id}`),

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

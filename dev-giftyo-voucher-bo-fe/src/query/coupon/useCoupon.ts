import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import { CouponService } from 'src/services/coupon/CouponService';
import { Coupon } from 'src/interface/coupon/GiftVO';
import { CouponQueryKeys } from 'src/query/coupon/couponKeys';
import { AxiosError } from 'axios';
import {
  CouponDetailParam,
  CouponDetailResponse,
  CouponDetailSendHistoryParam,
  CouponSearchFilter,
  CouponSearchResponse,
  CouponSendHistoryResponse,
} from 'src/interface/coupon/CouponManage.interface';

/**
 * 쿠폰 목록 hook
 * @param {CouponSearchPayload} params
 * @param options
 * @returns {UseQueryResult<Coupon[], unknown>}
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
export const useCouponList = (
  params: CouponSearchFilter,
  options?: UseQueryOptions<
    CouponSearchResponse,
    AxiosError,
    CouponSearchResponse,
    [string[], CouponSearchFilter | undefined]
  >
) =>
  useQuery([CouponQueryKeys.list, params], () => CouponService.getCouponList(params), {
    ...options,
  });

/**
 *
 * 쿠폰 상세정보 발송내역 리스트 hook
 * @param {CouponDetailSendHistoryParam} params
 * @param {UseQueryOptions<CouponSendHistoryResponse, AxiosError, CouponSendHistoryResponse, [string[], (CouponDetailSendHistoryParam | undefined)]>} options
 * @returns {UseQueryResult<CouponSendHistoryResponse, unknown>}
 * @author jockbal@coopnc.com
 * @since 2023.11.03
 */
export const useCouponDetailSendList = (
  params: CouponDetailSendHistoryParam,
  options?: UseQueryOptions<
    CouponSendHistoryResponse,
    AxiosError,
    CouponSendHistoryResponse,
    [string[], CouponDetailSendHistoryParam | undefined]
  >
) =>
  useQuery(
    [CouponQueryKeys.sendList, params],
    () => CouponService.getCouponDetailSendList(params),
    {
      ...options,
    }
  );

/**
 * 쿠폰 상세정보  hook
 * @param {CouponDetailParam} params
 * @param {UseQueryOptions<CouponDetailResponse, AxiosError, CouponDetailResponse, [string[], (CouponDetailParam | undefined)]>} options
 * @returns {UseQueryResult<CouponDetailResponse, unknown>}
 * @author jockbal@coopnc.com
 * @since 2023.11.03
 */
export const useCouponDetail = (
  params: CouponDetailParam,
  options?: UseQueryOptions<
    CouponDetailResponse,
    AxiosError,
    CouponDetailResponse,
    [string[], CouponDetailParam | undefined]
  >
) =>
  useQuery([CouponQueryKeys.detail, params], () => CouponService.getCouponDetailInfo(params), {
    ...options,
  });
/**
 * 쿠폰 장바구니 담기
 * @param {Omit<UseMutationOptions<boolean, unknown, Coupon, unknown>, "mutationFn"> | undefined} options
 * @returns {UseMutationResult<boolean, unknown, Coupon, unknown>}
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
export const useCouponAddCart = (options?: UseMutationOptions<boolean, AxiosError, Coupon>) =>
  useMutation((params: Coupon) => CouponService.postCoupon(params), {
    ...options,
  });

import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query';
import { CouponService } from 'src/services/coupon/CouponService';
import { Coupon, CouponSearchPayload } from 'src/interface/coupon/GiftVO';
import { CouponQueryKeys } from 'src/query/coupon/couponKeys';
import { AxiosError } from 'axios';

/**
 * 쿠폰 목록 hook
 * @param {CouponSearchPayload} params
 * @param options
 * @returns {UseQueryResult<Coupon[], unknown>}
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
export const useCouponList = (
  params?: CouponSearchPayload,
  options?: UseQueryOptions<
    Coupon[],
    AxiosError,
    Coupon[],
    [string[], CouponSearchPayload | undefined]
  >,
) =>
  useQuery(
    [CouponQueryKeys.list, params],
    () => CouponService.getCouponList(params),
    { ...options },
  );

/**
 * 쿠폰 상세 hook
 * @param {number} id
 * @param options
 * @returns {UseQueryResult<Coupon, unknown>}
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
export const useCoupon = (
  id: number,
  options?: UseQueryOptions<
    Coupon,
    AxiosError,
    Coupon,
    [string[], number | undefined]
  >,
) =>
  useQuery(
    [CouponQueryKeys.detail, id],
    () => CouponService.getCoupon(id),
    options,
  );

/**
 * 쿠폰 장바구니 담기
 * @param {Omit<UseMutationOptions<boolean, unknown, Coupon, unknown>, "mutationFn"> | undefined} options
 * @returns {UseMutationResult<boolean, unknown, Coupon, unknown>}
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
export const useCouponAddCart = (
  options?: UseMutationOptions<boolean, AxiosError, Coupon>,
) =>
  useMutation((params: Coupon) => CouponService.postCoupon(params), {
    ...options,
  });

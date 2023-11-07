import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CouponService } from 'src/services/coupon/CouponService';
import { initializeCouponSearchFilter } from 'src/recoil/coupon/couponAtoms';
import { useCouponDetailSendList, useCouponList } from 'src/query/coupon/useCoupon';

const mockPagination = {
  last: false,
  first: true,
  totalElements: 120,
  start: 11,
  end: 20,
  size: 10,
  curPage: 2,
};

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: any }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const mockResult = {
  list: [],
  pagination: mockPagination,
};

const mockDetailSendListParam = {
  couponNum: '1234',
};

describe('useCoupon', () => {
  describe('useCouponList', () => {
    test('정상 조회시 데이터를 반환 한다.', () => {
      jest.spyOn(CouponService, 'getCouponList').mockResolvedValue(mockResult);

      const { result } = renderHook(() => useCouponList(initializeCouponSearchFilter), {
        wrapper: createWrapper(),
      });
      waitFor(() => expect(result).toEqual(mockResult));
    });

    test('조회 실패시 에러를 반환한다.', () => {
      jest.spyOn(CouponService, 'getCouponList').mockRejectedValue(null);

      const { result } = renderHook(() => useCouponList(initializeCouponSearchFilter), {
        wrapper: createWrapper(),
      });
      waitFor(() => expect(result.current.isError).toBeTruthy());
    });
  });

  describe('useCouponDetailSendList', () => {
    test('정상 조회시 데이터를 반환 한다.', () => {
      jest.spyOn(CouponService, 'getCouponDetailSendList').mockResolvedValue(mockResult);

      const { result } = renderHook(() => useCouponDetailSendList(mockDetailSendListParam), {
        wrapper: createWrapper(),
      });
      waitFor(() => expect(result).toEqual(mockResult));
    });

    test('조회 실패시 에러를 반환한다.', () => {
      jest.spyOn(CouponService, 'getCouponDetailSendList').mockRejectedValue(null);

      const { result } = renderHook(() => useCouponDetailSendList(mockDetailSendListParam), {
        wrapper: createWrapper(),
      });
      waitFor(() => expect(result.current.isError).toBeTruthy());
    });
  });
});

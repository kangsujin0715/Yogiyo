import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CustomerBrandService } from 'src/services/customer/CustomerBrandService';
import { CustomerBrandListVO, CustomerBrandVO } from 'src/interface/customer/CustomerBrandVO';
import {
  useCustomerBrandDetailQuery,
  useCustomerBrandListQuery,
} from 'src/query/customer/useCustomerBrandQuery';

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: any }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const mockListResult: CustomerBrandListVO = {
  list: [],
};

const mockDetailResult: CustomerBrandVO = {
  no: 1,
  franchiseId: '123',
  brandCode: '321',
  brandName: 'testBrand',
  corporationName: 'testCor',
  registerDate: '2020-11-13 11:11:11',
};

describe('useCustomerBrandQuery', () => {
  describe('useCustomerBrandListQuery', () => {
    test('거래처 관리 -> 브랜드 리스트 정상 조회시 데이터를 반환 한다.', async () => {
      const spyFn = jest
        .spyOn(CustomerBrandService, 'getBrandList')
        .mockResolvedValue(mockListResult);

      const { result } = renderHook(() => useCustomerBrandListQuery({ params: {} }), {
        wrapper: createWrapper(),
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBeTruthy();
      });

      expect(spyFn).toBeCalledTimes(1);
      expect(result.current.data).toBeDefined();
      expect(result.current.data).toStrictEqual([]);
    });

    test('거래처 관리 -> 브랜드 리스트 조회 실패시 에러를 반환한다.', async () => {
      const spyFn = jest.spyOn(CustomerBrandService, 'getBrandList').mockRejectedValue(null);

      const { result } = renderHook(() => useCustomerBrandListQuery({ params: {} }), {
        wrapper: createWrapper(),
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBeFalsy();
      });

      expect(spyFn).toBeCalledTimes(2);
      expect(result.current.error).toBeDefined();
    });
  });

  describe('useCustomerBrandDetailQuery', () => {
    test('거래처 관리 -> 브랜드 상세 정상 조회시 데이터를 반환 한다.', async () => {
      const spyFn = jest
        .spyOn(CustomerBrandService, 'getBrandDetail')
        .mockResolvedValue(mockDetailResult);

      const { result } = renderHook(() => useCustomerBrandDetailQuery({ params: '1' }), {
        wrapper: createWrapper(),
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBeTruthy();
      });

      expect(spyFn).toBeCalledTimes(1);
      expect(result.current.data).toBeDefined();
      expect(result.current.data).toBe(mockDetailResult);
    });

    test('거래처 관리 -> 브랜드 상세 조회 실패시 에러를 반환한다.', async () => {
      const spyFn = jest.spyOn(CustomerBrandService, 'getBrandDetail').mockRejectedValue(null);

      const { result } = renderHook(() => useCustomerBrandDetailQuery({ params: '1' }), {
        wrapper: createWrapper(),
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBeFalsy();
      });

      expect(spyFn).toBeCalledTimes(2);
      expect(result.current.error).toBeDefined();
    });
  });
});

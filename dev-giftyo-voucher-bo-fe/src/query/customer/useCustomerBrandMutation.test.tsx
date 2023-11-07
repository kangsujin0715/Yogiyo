import { act, renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CustomerBrandService } from 'src/services/customer/CustomerBrandService';
import { CustomerBrandVO } from 'src/interface/customer/CustomerBrandVO';
import {
  useBrandRegisterMutation,
  useBrandUpdateMutation,
} from 'src/query/customer/useCustomerBrandMutation';
import { ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const mockRegisterResult: CustomerBrandVO = {
  no: 1,
  franchiseId: '123',
  brandCode: '321',
  brandName: 'testBrand',
  corporationName: 'testCor',
  registerDate: '2020-11-13 11:11:11',
};

describe('useCustomerBrandMutation', () => {
  describe('useBrandRegisterMutation', () => {
    test('거래처 관리 -> 브랜드 등록 성공 시 성공 응답을 반환한다.', async () => {
      jest
        .spyOn(CustomerBrandService, 'requestBrandRegister')
        .mockResolvedValue(mockRegisterResult);

      const { result } = renderHook(() => useBrandRegisterMutation(), {
        wrapper: wrapper,
      });

      act(() => {
        result.current.mutate({});
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBeTruthy();
      });
    });

    test('거래처 관리 -> 브랜드 등록 실패시 에러를 반환한다.', async () => {
      jest.spyOn(CustomerBrandService, 'requestBrandRegister').mockRejectedValue(null);

      const { result } = renderHook(() => useBrandRegisterMutation(), {
        wrapper: wrapper,
      });

      act(() => {
        result.current.mutate({});
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBeFalsy();
      });
    });
  });

  describe('useBrandUpdateMutation', () => {
    test('거래처 관리 -> 브랜드 수정 성공 시 성공 응답을 반환한다.', async () => {
      jest.spyOn(CustomerBrandService, 'requestBrandUpdate').mockResolvedValue(mockRegisterResult);

      const { result } = renderHook(() => useBrandUpdateMutation(), {
        wrapper: wrapper,
      });

      act(() => {
        result.current.mutate({});
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBeTruthy();
      });
    });

    test('거래처 관리 -> 브랜드 수정 실패시 에러를 반환한다.', async () => {
      jest.spyOn(CustomerBrandService, 'requestBrandUpdate').mockRejectedValue(null);

      const { result } = renderHook(() => useBrandUpdateMutation(), {
        wrapper: wrapper,
      });

      act(() => {
        result.current.mutate({});
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBeFalsy();
      });
    });
  });
});

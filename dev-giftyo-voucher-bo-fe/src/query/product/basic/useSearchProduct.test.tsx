import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import { initializeProductSearchFilter } from 'src/recoil/product/productAtoms';
import { ProductService } from 'src/services/product/basic/ProductSearchService';
import { useSearchProduct } from 'src/query/product/basic/useSearchProduct';
import { mockResult } from 'src/query/system/history/useHistory.test';

const createWrapper = () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('product basic search', () => {
  describe('useSearchProduct', () => {
    const params = initializeProductSearchFilter;
    test('정상조회시 데이터를 반환해야 한다.', async () => {
      const serviceFn = jest.spyOn(ProductService, 'getProductList').mockResolvedValue(mockResult);
      const { result } = renderHook(() => useSearchProduct(params), {
        wrapper: createWrapper(),
      });
      await waitFor(() => {
        expect(serviceFn).toHaveBeenCalledWith(params);
        expect(result.current.isSuccess).toBeTruthy();
      });
      expect(result.current.data).toBeDefined();
    });

    test('오류시 error 를 반환해야 한다.', async () => {
      jest.spyOn(ProductService, 'getProductList').mockRejectedValue(null);
      const { result } = renderHook(() => useSearchProduct(params), {
        wrapper: createWrapper(),
      });

      await waitFor(() => {
        expect(result.current.isError).toBeTruthy();
      });
      expect(result.current.error).toBeDefined();
    });
  });
});

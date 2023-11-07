import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import {
  useNotice,
  useNoticeCategory,
  useNoticeCategoryList,
  useNoticeList,
} from 'src/query/product/notice/useNotice';
import { NoticeCategoryService, NoticeService } from 'src/services/product/notice/NoticeService';
import { Notice, NoticeCategory } from 'src/interface/product/Notice.interface';

const createWrapper = () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('product notice', () => {
  describe('useNoticeList', () => {
    const params = { keyword: 'test', noticeCategorySeq: 10 };
    test('정상조회시 데이터를 반환해야 한다.', async () => {
      const serviceFn = jest.spyOn(NoticeService, 'getNoticeList').mockResolvedValue([]);
      const { result } = renderHook(() => useNoticeList(params), {
        wrapper: createWrapper(),
      });
      await waitFor(() => {
        expect(serviceFn).toHaveBeenCalledWith(params);
        expect(result.current.isSuccess).toBeTruthy();
      });
      expect(result.current.data).toBeDefined();
    });

    test('오류시 error 를 반환해야 한다.', async () => {
      jest.spyOn(NoticeService, 'getNoticeList').mockRejectedValue(null);
      const { result } = renderHook(() => useNoticeList(params), {
        wrapper: createWrapper(),
      });

      await waitFor(() => {
        expect(result.current.isError).toBeTruthy();
      });
      expect(result.current.error).toBeDefined();
    });
  });

  describe('useNotice', () => {
    const testSeq = 3;
    test('정상조회시 데이터를 반환해야 한다.', async () => {
      const serviceFn = jest.spyOn(NoticeService, 'getNotice').mockResolvedValue({} as Notice);
      const { result } = renderHook(() => useNotice(testSeq), { wrapper: createWrapper() });
      await waitFor(() => {
        expect(serviceFn).toHaveBeenCalledWith(testSeq);
        expect(result.current.isSuccess).toBeTruthy();
      });
      expect(result.current.data).toBeDefined();
    });

    test('오류시 error 를 반환해야 한다.', async () => {
      jest.spyOn(NoticeService, 'getNotice').mockRejectedValue(null);
      const { result } = renderHook(() => useNotice(testSeq), {
        wrapper: createWrapper(),
      });

      await waitFor(() => {
        expect(result.current.isError).toBeTruthy();
      });
      expect(result.current.error).toBeDefined();
    });
  });

  describe('useNoticeCategoryList', () => {
    const params = { keyword: 'test', brandCode: 'A111' };

    test('정상조회시 데이터를 반환해야 한다.', async () => {
      const serviceFn = jest
        .spyOn(NoticeCategoryService, 'getNoticeCategoryList')
        .mockResolvedValue([]);
      const { result } = renderHook(() => useNoticeCategoryList(params), {
        wrapper: createWrapper(),
      });
      await waitFor(() => {
        expect(serviceFn).toHaveBeenCalledWith(params);
        expect(result.current.isSuccess).toBeTruthy();
      });
      expect(result.current.data).toBeDefined();
    });

    test('오류시 error 를 반환해야 한다.', async () => {
      jest.spyOn(NoticeCategoryService, 'getNoticeCategoryList').mockRejectedValue(null);
      const { result } = renderHook(() => useNoticeCategoryList(params), {
        wrapper: createWrapper(),
      });

      await waitFor(() => {
        expect(result.current.isError).toBeTruthy();
      });
      expect(result.current.error).toBeDefined();
    });
  });

  describe('useNoticeCategory', () => {
    const testSeq = 3;

    test('정상조회시 데이터를 반환해야 한다.', async () => {
      const serviceFn = jest
        .spyOn(NoticeCategoryService, 'getNoticeCategory')
        .mockResolvedValue({} as NoticeCategory);
      const { result } = renderHook(() => useNoticeCategory(testSeq), { wrapper: createWrapper() });
      await waitFor(() => {
        expect(serviceFn).toHaveBeenCalledWith(testSeq);
        expect(result.current.isSuccess).toBeTruthy();
      });

      expect(result.current.data).toBeDefined();
    });

    test('오류시 error 를 반환해야 한다.', async () => {
      jest.spyOn(NoticeCategoryService, 'getNoticeCategory').mockRejectedValue(null);
      const { result } = renderHook(() => useNoticeCategory(testSeq), {
        wrapper: createWrapper(),
      });

      await waitFor(() => {
        expect(result.current.isError).toBeTruthy();
      });
      expect(result.current.error).toBeDefined();
    });
  });
});

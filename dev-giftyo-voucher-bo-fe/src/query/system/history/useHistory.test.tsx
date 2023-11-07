import { HistoryService } from 'src/services/system/history/HistoryService';
import {
  useDownloadHistory,
  useInformationReadHistory,
  useLoginHistory,
  useModifyHistory,
  useUploadHistory,
} from 'src/query/system/history/useHistory';
import { initializeHistorySearchFilter } from 'src/recoil/system/history/historyAtom';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

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
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export const mockResult = {
  list: [],
  pagination: mockPagination,
};

describe('useHistory', () => {
  describe('useLoginHistory', () => {
    test('정상 조회시 데이터를 반환 한다.', async () => {
      jest.spyOn(HistoryService, 'getLoginHistory').mockResolvedValue(mockResult);

      const { result } = renderHook(() => useLoginHistory(initializeHistorySearchFilter), {
        wrapper: createWrapper(),
      });
      await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
      expect(result.current.data).toBeDefined();
    });

    test('조회 실패시 에러를 반환한다.', async () => {
      jest.spyOn(HistoryService, 'getLoginHistory').mockRejectedValue(null);

      const { result } = renderHook(() => useLoginHistory(initializeHistorySearchFilter), {
        wrapper: createWrapper(),
      });
      await waitFor(() => expect(result.current.isError).toBeTruthy());
      expect(result.current.error).toBeDefined();
    });
  });

  describe('useModifyHistory', () => {
    test('정상 조회시 데이터를 반환 한다.', async () => {
      jest.spyOn(HistoryService, 'getModifyHistory').mockResolvedValue(mockResult);

      const { result } = renderHook(() => useModifyHistory(initializeHistorySearchFilter), {
        wrapper: createWrapper(),
      });
      await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
      expect(result.current.data).toBeDefined();
    });

    test('조회 실패시 에러를 반환한다.', async () => {
      jest.spyOn(HistoryService, 'getModifyHistory').mockRejectedValue(null);

      const { result } = renderHook(() => useModifyHistory(initializeHistorySearchFilter), {
        wrapper: createWrapper(),
      });
      await waitFor(() => expect(result.current.isError).toBeTruthy());
      expect(result.current.error).toBeDefined();
    });
  });

  describe('useInformationReadHistory', () => {
    test('정상 조회시 데이터를 반환 한다.', async () => {
      jest.spyOn(HistoryService, 'getInformationReadHistory').mockResolvedValue(mockResult);

      const { result } = renderHook(
        () => useInformationReadHistory(initializeHistorySearchFilter),
        { wrapper: createWrapper() }
      );

      await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
      expect(result.current.data).toBeDefined();
    });

    test('조회 실패시 에러를 반환한다.', async () => {
      jest.spyOn(HistoryService, 'getInformationReadHistory').mockRejectedValue(null);

      const { result } = renderHook(
        () => useInformationReadHistory(initializeHistorySearchFilter),
        { wrapper: createWrapper() }
      );

      await waitFor(() => expect(result.current.isError).toBeTruthy());
      expect(result.current.error).toBeDefined();
    });
  });

  describe('useDownloadHistory', () => {
    test('정상 조회시 데이터를 반환 한다.', async () => {
      jest.spyOn(HistoryService, 'getDownloadHistory').mockResolvedValue(mockResult);

      const { result } = renderHook(() => useDownloadHistory(initializeHistorySearchFilter), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
      expect(result.current.data).toBeDefined();
    });

    test('조회 실패시 에러를 반환한다.', async () => {
      jest.spyOn(HistoryService, 'getDownloadHistory').mockRejectedValue(null);

      const { result } = renderHook(() => useDownloadHistory(initializeHistorySearchFilter), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isError).toBeTruthy());
      expect(result.current.error).toBeDefined();
    });
  });

  describe('useUploadHistory', () => {
    test('정상 조회시 데이터를 반환 한다.', async () => {
      jest.spyOn(HistoryService, 'getUploadHistory').mockResolvedValue(mockResult);

      const { result } = renderHook(() => useUploadHistory(initializeHistorySearchFilter), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
      expect(result.current.data).toBeDefined();
    });

    test('조회 실패시 에러를 반환한다.', async () => {
      jest.spyOn(HistoryService, 'getUploadHistory').mockRejectedValue(null);

      const { result } = renderHook(() => useUploadHistory(initializeHistorySearchFilter), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isError).toBeTruthy());
      expect(result.current.error).toBeDefined();
    });
  });
});

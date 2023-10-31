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

describe('useHistory', () => {
  describe('useLoginHistory', () => {
    test('정상 조회시 데이터를 반환 한다.', () => {
      jest
        .spyOn(HistoryService, 'getLoginHistory')
        .mockResolvedValue(mockResult);

      const { result } = renderHook(
        () => useLoginHistory(initializeHistorySearchFilter),
        { wrapper: createWrapper() },
      );
      waitFor(() => expect(result).toEqual(mockResult));
    });

    test('조회 실패시 에러를 반환한다.', () => {
      jest.spyOn(HistoryService, 'getLoginHistory').mockRejectedValue(null);

      const { result } = renderHook(
        () => useLoginHistory(initializeHistorySearchFilter),
        { wrapper: createWrapper() },
      );
      waitFor(() => expect(result.current.isError).toBeTruthy());
    });
  });

  describe('useModifyHistory', () => {
    test('정상 조회시 데이터를 반환 한다.', () => {
      jest
        .spyOn(HistoryService, 'getLoginHistory')
        .mockResolvedValue(mockResult);

      const { result } = renderHook(
        () => useModifyHistory(initializeHistorySearchFilter),
        { wrapper: createWrapper() },
      );
      waitFor(() => expect(result).toEqual(mockResult));
    });

    test('조회 실패시 에러를 반환한다.', () => {
      jest.spyOn(HistoryService, 'getLoginHistory').mockRejectedValue(null);

      const { result } = renderHook(
        () => useModifyHistory(initializeHistorySearchFilter),
        { wrapper: createWrapper() },
      );
      waitFor(() => expect(result.current.isError).toBeTruthy());
    });
  });

  describe('useInformationReadHistory', () => {
    test('정상 조회시 데이터를 반환 한다.', () => {
      jest
        .spyOn(HistoryService, 'getLoginHistory')
        .mockResolvedValue(mockResult);

      const { result } = renderHook(
        () => useInformationReadHistory(initializeHistorySearchFilter),
        { wrapper: createWrapper() },
      );
      waitFor(() => expect(result).toEqual(mockResult));
    });

    test('조회 실패시 에러를 반환한다.', () => {
      jest.spyOn(HistoryService, 'getLoginHistory').mockRejectedValue(null);

      const { result } = renderHook(
        () => useInformationReadHistory(initializeHistorySearchFilter),
        { wrapper: createWrapper() },
      );
      waitFor(() => expect(result.current.isError).toBeTruthy());
    });
  });

  describe('useDownloadHistory', () => {
    test('정상 조회시 데이터를 반환 한다.', () => {
      jest
        .spyOn(HistoryService, 'getLoginHistory')
        .mockResolvedValue(mockResult);

      const { result } = renderHook(
        () => useDownloadHistory(initializeHistorySearchFilter),
        { wrapper: createWrapper() },
      );
      waitFor(() => expect(result).toEqual(mockResult));
    });

    test('조회 실패시 에러를 반환한다.', () => {
      jest.spyOn(HistoryService, 'getLoginHistory').mockRejectedValue(null);

      const { result } = renderHook(
        () => useDownloadHistory(initializeHistorySearchFilter),
        { wrapper: createWrapper() },
      );
      waitFor(() => expect(result.current.isError).toBeTruthy());
    });
  });

  describe('useUploadHistory', () => {
    test('정상 조회시 데이터를 반환 한다.', () => {
      jest
        .spyOn(HistoryService, 'getLoginHistory')
        .mockResolvedValue(mockResult);

      const { result } = renderHook(
        () => useUploadHistory(initializeHistorySearchFilter),
        { wrapper: createWrapper() },
      );
      waitFor(() => expect(result).toEqual(mockResult));
    });

    test('조회 실패시 에러를 반환한다.', () => {
      jest.spyOn(HistoryService, 'getLoginHistory').mockRejectedValue(null);

      const { result } = renderHook(
        () => useUploadHistory(initializeHistorySearchFilter),
        { wrapper: createWrapper() },
      );
      waitFor(() => expect(result.current.isError).toBeTruthy());
    });
  });
});

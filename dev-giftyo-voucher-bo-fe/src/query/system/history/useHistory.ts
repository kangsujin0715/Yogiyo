import { useQuery, UseQueryOptions } from 'react-query';
import { HistoryListResponse, HistorySearchFilter } from 'src/interface/system/history/History';
import { AxiosError } from 'axios';
import { HistoryQueryKey } from 'src/query/system/history/historyKeys';
import { HistoryService } from 'src/services/system/history/HistoryService';

/**
 * 로그인 이력 조회 hook
 * @param {HistorySearchFilter} params
 * @param {UseQueryOptions<HistoryListResponse, axios.AxiosError, HistoryListResponse, [string[], (HistorySearchFilter | undefined)]>} options
 * @returns {UseQueryResult<HistoryListResponse, unknown>}
 */
export const useLoginHistory = (
  params: HistorySearchFilter,
  options?: UseQueryOptions<
    HistoryListResponse,
    AxiosError,
    HistoryListResponse,
    [string[], HistorySearchFilter | undefined]
  >
) =>
  useQuery([HistoryQueryKey.login, params], () => HistoryService.getLoginHistory(params), {
    ...options,
  });

/**
 * 수정이력 조회 hook
 * @param {HistorySearchFilter} params
 * @param {UseQueryOptions<HistoryListResponse, axios.AxiosError, HistoryListResponse, [string[], (HistorySearchFilter | undefined)]>} options
 * @returns {UseQueryResult<Awaited<{pagination: Pagination, list: HistoryVO[]}>, unknown>}
 */
export const useModifyHistory = (
  params: HistorySearchFilter,
  options?: UseQueryOptions<
    HistoryListResponse,
    AxiosError,
    HistoryListResponse,
    [string[], HistorySearchFilter | undefined]
  >
) =>
  useQuery([HistoryQueryKey.modify, params], () => HistoryService.getModifyHistory(params), {
    ...options,
  });

/**
 * 개인정보 열람 이력 조회 hook
 * @param {HistorySearchFilter} params
 * @param {UseQueryOptions<HistoryListResponse, axios.AxiosError, HistoryListResponse, [string[], (HistorySearchFilter | undefined)]>} options
 * @returns {UseQueryResult<Awaited<{pagination: {curPage: number, last: boolean, size: number, start: number, end: number, first: boolean, totalElements: number}, list: ({date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string})[]}>, unknown>}
 */
export const useInformationReadHistory = (
  params: HistorySearchFilter,
  options?: UseQueryOptions<
    HistoryListResponse,
    AxiosError,
    HistoryListResponse,
    [string[], HistorySearchFilter | undefined]
  >
) =>
  useQuery([HistoryQueryKey.read, params], () => HistoryService.getInformationReadHistory(params), {
    ...options,
  });

/**
 * 다운로드 이력 조회 hook
 * @param {HistorySearchFilter} params
 * @param {UseQueryOptions<HistoryListResponse, axios.AxiosError, HistoryListResponse, [string[], (HistorySearchFilter | undefined)]>} options
 * @returns {UseQueryResult<Awaited<{pagination: {curPage: number, last: boolean, size: number, start: number, end: number, first: boolean, totalElements: number}, list: ({date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string})[]}>, unknown>}
 */
export const useDownloadHistory = (
  params: HistorySearchFilter,
  options?: UseQueryOptions<
    HistoryListResponse,
    AxiosError,
    HistoryListResponse,
    [string[], HistorySearchFilter | undefined]
  >
) =>
  useQuery([HistoryQueryKey.download, params], () => HistoryService.getDownloadHistory(params), {
    ...options,
  });

/**
 * 업로드 이력 조회 hook
 * @param {HistorySearchFilter} params
 * @param {UseQueryOptions<HistoryListResponse, axios.AxiosError, HistoryListResponse, [string[], (HistorySearchFilter | undefined)]>} options
 * @returns {UseQueryResult<Awaited<{pagination: {curPage: number, last: boolean, size: number, start: number, end: number, first: boolean, totalElements: number}, list: ({date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string})[]}>, unknown>}
 */
export const useUploadHistory = (
  params: HistorySearchFilter,
  options?: UseQueryOptions<
    HistoryListResponse,
    AxiosError,
    HistoryListResponse,
    [string[], HistorySearchFilter | undefined]
  >
) =>
  useQuery([HistoryQueryKey.upload, params], () => HistoryService.getUploadHistory(params), {
    ...options,
  });

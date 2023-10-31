import {
  History,
  HistoryListResponse,
  HistorySearchFilter,
} from 'src/interface/system/history/History';
import { feAxios } from 'src/net/customAxios';
import { toQueryParams } from 'src/common/utils/commonUtils';

const basePath = '/api/common/system/history';
export const HistoryService = {
  /**
   * 로그인 이력 조회
   * @param {HistorySearchFilter} params
   * @returns {Promise<Awaited<HistoryListResponse>>}
   */
  getLoginHistory: (params: HistorySearchFilter): Promise<HistoryListResponse> => {
    console.log('getLoginHistory', params);
    return feAxios.get(`${basePath}/login?${toQueryParams(params)}`);
  },
  /**
   * 변경이력 조회
   * @param {HistorySearchFilter} params
   * @returns {Promise<Awaited<{result?: boolean, date: string, no: number, reason?: string, etc?: string, work: string, ip: string, typeText: string, name: string, id: string, menu?: string, type?: "C" | "U" | "D"}[]>>}
   */
  getModifyHistory: async (params: HistorySearchFilter): Promise<HistoryListResponse> => {
    console.log('getModifyHistory', params);
    const { list, pagination }: HistoryListResponse = await feAxios.get(
      `${basePath}/modify?${toQueryParams(params)}`
    );
    return {
      list: list.map(modTypeMap),
      pagination,
    };
  },
  /**
   * 개인정보 열람 내역 조회
   * @param {HistorySearchFilter} params
   * @returns {Promise<Awaited<{pagination: {curPage: number, last: boolean, size: number, start: number, end: number, first: boolean, totalElements: number}, list: ({date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string})[]}>>}
   */
  getInformationReadHistory: (params: HistorySearchFilter): Promise<HistoryListResponse> => {
    const searchParams = { ...params, ...params.menu };
    return feAxios.get(`${basePath}/read?${toQueryParams(searchParams)}`);
  },
  /**
   * 엑셀 다운로드 이력 조회
   * @param {HistorySearchFilter} params
   * @returns {Promise<Awaited<{pagination: {curPage: number, last: boolean, size: number, start: number, end: number, first: boolean, totalElements: number}, list: ({date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string})[]}>>}
   */
  getDownloadHistory: (params: HistorySearchFilter): Promise<HistoryListResponse> => {
    const searchParams = { ...params, ...params.menu };
    return feAxios.get(`${basePath}/download?${toQueryParams(searchParams)}`);
  },
  /**h
   * 엑셀 업로드 이력 조회
   * @param {HistorySearchFilter} params
   * @returns {Promise<Awaited<{pagination: {curPage: number, last: boolean, size: number, start: number, end: number, first: boolean, totalElements: number}, list: ({date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string} | {date: string, no: number, work: string, ip: string, name: string, id: string, menu: string})[]}>>}
   */
  getUploadHistory: (params: HistorySearchFilter): Promise<HistoryListResponse> => {
    const searchParams = { ...params, ...params.menu };
    return feAxios.get(`${basePath}/upload?${toQueryParams(searchParams)}`);
  },
};

export const HistoryMenuFilterService = {
  /**
   * 이력 메뉴 필터 목록 조회
   * @param {0 | 1 | 2} depth
   * @param {string} code
   * @returns {Promise<Awaited<any>>}
   */
  getMenuList: ({
    depth,
    code,
  }: {
    depth: 0 | 1 | 2;
    code?: string;
  }): Promise<{ code: string; name: string }[]> =>
    feAxios.get(`/api/common/system/history/menus?${toQueryParams({ depth, code })}`),
};

/**
 * 변경이력 변경 type map 함수
 * @param {History} history
 * @returns {History}
 */
const modTypeMap = (history: History): History => ({
  ...history,
  typeText: history.type ? modTypeMapper[history.type] : '-',
});

/**
 * 변경이력 Mapper
 * @type {{C: string, D: string, U: string}}
 */
const modTypeMapper = {
  U: '수정',
  C: '등록',
  D: '삭제',
};

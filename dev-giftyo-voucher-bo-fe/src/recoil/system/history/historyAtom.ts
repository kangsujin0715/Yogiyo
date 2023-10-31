import { atom } from 'recoil';
import { HistorySearchFilter } from 'src/interface/system/history/History';

/**
 * 이력 조회 필터 초기값
 * @type {{size: number, modType: string, ip: string, name: string, id: string, page: number, menu: {third: string, first: string, second: string}}}
 */
export const initializeHistorySearchFilter: HistorySearchFilter = {
  id: '',
  name: '',
  ip: '',
  menu: { first: 'A', second: 'A', third: 'A' },
  modType: 'A',
  size: 10,
  page: 1,
};

/**
 * 로그인 이력 조회 필터 상태
 * @type {RecoilState<HistorySearchFilter>}
 */
export const loginHistoryFilterAtom = atom<HistorySearchFilter>({
  key: 'login-history-filter-atom',
  default: initializeHistorySearchFilter,
});

/**
 * 정보 수정 이력 필터 상태
 * @type {RecoilState<HistorySearchFilter>}
 */
export const modifyHistoryFilterAtom = atom<HistorySearchFilter>({
  key: 'modify-history-filter-atom',
  default: initializeHistorySearchFilter,
});

/**
 * 개인정보 열람 이력 필터 상태
 * @type {RecoilState<HistorySearchFilter>}
 */
export const readHistoryFilterAtom = atom<HistorySearchFilter>({
  key: 'read-history-filter-atom',
  default: initializeHistorySearchFilter,
});

/**
 * 업로드 이력 필터 상태
 * @type {RecoilState<HistorySearchFilter>}
 */
export const uploadHistoryFilterAtom = atom<HistorySearchFilter>({
  key: 'upload-history-filter-atom',
  default: initializeHistorySearchFilter,
});

/**
 * 다운로드 이력 필터 상태
 * @type {RecoilState<HistorySearchFilter>}
 */
export const downloadHistoryFilterAtom = atom<HistorySearchFilter>({
  key: 'download-history-filter-atom',
  default: initializeHistorySearchFilter,
});

import { Pagination, PaginationSearchParams } from 'src/interface/Pagination';

export interface History {
  no: number;
  id: string;
  name: string;
  ip: string;
  work: string;
  result?: boolean;
  date: string;
  menu?: string;
  type?: 'C' | 'U' | 'D';
  typeText?: string;
  reason?: string;
  etc?: string;
}

export interface HistoryListResponse {
  list: History[];
  pagination: Pagination;
}

export interface HistorySearchFilter extends PaginationSearchParams {
  id: string;
  name: string;
  ip: string;
  menu: { first: string; second: string; third: string };
  modType: 'A' | 'C' | 'U' | 'D';
}

export enum HistoryType {
  login = 'login',
  read = 'read',
  modify = 'modify',
  upload = 'upload',
  download = 'download',
}

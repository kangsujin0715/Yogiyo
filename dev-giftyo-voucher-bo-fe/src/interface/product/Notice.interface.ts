import { BaseData, YN } from 'src/interface/Common.interfact';
import { Pagination } from 'src/interface/Pagination';
import { ReactNode } from 'react';

export interface NoticeCategory extends BaseData {
  seq: number;
  name: string | ReactNode;
  description: string;
  useYn: YN;
}

export interface Notice extends BaseData {
  seq: number;
  brandNm: string;
  brandCode: string;
  category: string;
  title: string;
  content: string;
  defaultYn: YN;
  useYn: YN;
}

export interface NoticeCategoryListResponse {
  list: NoticeCategory[];
  pagination: Pagination;
}

export interface NoticeListResponse {
  list: Notice[];
  pagination: Pagination;
}

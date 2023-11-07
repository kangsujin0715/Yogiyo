import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';
import { Notice, NoticeCategory } from 'src/interface/product/Notice.interface';
import { ProductNoticeQueryKeys } from 'src/query/product/notice/productNoticeKeys';
import { NoticeCategoryService, NoticeService } from 'src/services/product/notice/NoticeService';

export const useNoticeList = (
  params: { keyword: string; noticeCategorySeq: number },
  options?: UseQueryOptions<
    Notice[],
    AxiosError,
    Notice[],
    [string[], { keyword: string; noticeCategorySeq: number } | undefined]
  >
) =>
  useQuery([ProductNoticeQueryKeys.noticeList, params], () => NoticeService.getNoticeList(params), {
    ...options,
  });

export const useNotice = (
  params: number,
  options?: UseQueryOptions<Notice | undefined, AxiosError, Notice, [string[], number | undefined]>
) =>
  useQuery([ProductNoticeQueryKeys.noticeList, params], () => NoticeService.getNotice(params), {
    ...options,
  });

export const useNoticeCategoryList = (
  params: { keyword: string; brandCode: string },
  options?: UseQueryOptions<
    NoticeCategory[],
    AxiosError,
    NoticeCategory[],
    [string[], { keyword: string; brandCode: string } | undefined]
  >
) =>
  useQuery(
    [ProductNoticeQueryKeys.noticeList, params],
    () => NoticeCategoryService.getNoticeCategoryList(params),
    {
      ...options,
    }
  );

export const useNoticeCategory = (
  params: number,
  options?: UseQueryOptions<
    NoticeCategory | undefined,
    AxiosError,
    NoticeCategory,
    [string[], number | undefined]
  >
) =>
  useQuery(
    [ProductNoticeQueryKeys.noticeList, params],
    () => NoticeCategoryService.getNoticeCategory(params),
    {
      ...options,
    }
  );

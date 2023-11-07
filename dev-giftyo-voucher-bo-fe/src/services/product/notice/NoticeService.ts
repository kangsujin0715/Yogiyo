import { Notice, NoticeCategory } from 'src/interface/product/Notice.interface';
import { feAxios } from 'src/net/customAxios';
import { toQueryParams } from 'src/common/utils/commonUtils';

export const NoticeService = {
  baseUrl: '/api/voucher/product/notice',
  getNoticeList: (params: { noticeCategorySeq: number; keyword: string }): Promise<Notice[]> =>
    feAxios.get(`${NoticeService.baseUrl}/list?${toQueryParams({ ...params })}`),
  getNotice: (seq: number): Promise<Notice | undefined> =>
    feAxios.get(`${NoticeService.baseUrl}/${seq}`),
  postNotice: (notice: Notice): Promise<boolean> =>
    feAxios.post(`${NoticeService.baseUrl}/${notice.seq}`, notice),
  patchNotice: (notice: Notice): Promise<boolean> =>
    feAxios.patch(`${NoticeService.baseUrl}/${notice.seq}`, notice),
};

export const NoticeCategoryService = {
  baseUrl: '/api/voucher/product/notice/category',
  getNoticeCategoryList: (params: {
    brandCode: string;
    keyword: string;
  }): Promise<NoticeCategory[]> =>
    feAxios.get(`${NoticeCategoryService.baseUrl}/list?${toQueryParams({ ...params })}`),
  getNoticeCategory: (seq: number): Promise<NoticeCategory | undefined> =>
    feAxios.get(`${NoticeCategoryService.baseUrl}/${seq}`),
  postNoticeCategory: (noticeCategory: NoticeCategory): Promise<boolean> =>
    feAxios.post(`${NoticeCategoryService.baseUrl}/${noticeCategory.seq}`, noticeCategory),
  patchNoticeCategory: (noticeCategory: NoticeCategory): Promise<boolean> =>
    feAxios.patch(`${NoticeCategoryService.baseUrl}/${noticeCategory.seq}`, noticeCategory),
};

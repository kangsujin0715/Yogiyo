import { feAxios } from 'src/net/customAxios';
import { NoticeCategoryService, NoticeService } from 'src/services/product/notice/NoticeService';
import { toQueryParams } from 'src/common/utils/commonUtils';
import { Notice, NoticeCategory } from 'src/interface/product/Notice.interface';

describe('Product Notice', () => {
  describe('NoticeService', () => {
    const spyGetFn = jest.spyOn(feAxios, 'get').mockReturnValue(Promise.resolve([]));
    describe('getNotice', () => {
      test('상품고시정보조회 URL 경로로 요청이 실행 되어야 한다.', () => {
        const seq = 1;
        const expectPath = `${NoticeService.baseUrl}/${seq}`;
        NoticeService.getNotice(seq);
        expect(spyGetFn).toHaveBeenCalledWith(expectPath);
      });
    });
    describe('getNoticeList', () => {
      test('상품고시정보 목록 조회 URL 경로로 요청이 실행되어야 한다.', () => {
        const keyword = 'test';
        const noticeCategorySeq = 10;
        NoticeService.getNoticeList({ noticeCategorySeq, keyword });
        expect(spyGetFn).toHaveBeenCalledWith(
          `${NoticeService.baseUrl}?${toQueryParams({ noticeCategorySeq, keyword })}`
        );
      });
    });

    const testNotice: Notice = {
      seq: 0,
      brandNm: 'test',
      brandCode: 'T01',
      category: '테스트유형',
      title: '테스트 고시정보',
      content: '테스트 고시정보 입니다.',
      defaultYn: 'N',
      useYn: 'Y',
      regId: 'test',
      regNm: '테스트사용자',
      regDateTime: '2023-10-10 00:00:00',
      updId: 'test2',
      updNm: '테스트사용자2',
      updDateTime: '2023-10-10 00:00:00',
    };
    describe('postNotice', () => {
      test('상품고시정보 목록 조회 URL 경로로 요청이 실행되어야 한다.', () => {
        const spyPostFn = jest
          .spyOn(feAxios, 'post')
          .mockReturnValue(Promise.resolve({ result: true }));
        const expectPath = `${NoticeService.baseUrl}/0`;
        NoticeService.postNotice(testNotice);
        expect(spyPostFn).toHaveBeenCalledWith(expectPath, testNotice);
      });
    });

    describe('patchNotice', () => {
      test('상품고시정보 목록 조회 URL 경로로 요청이 실행되어야 한다.', () => {
        const spyPostFn = jest
          .spyOn(feAxios, 'patch')
          .mockReturnValue(Promise.resolve({ result: true }));
        const expectPath = `${NoticeService.baseUrl}/0`;
        NoticeService.patchNotice(testNotice);
        expect(spyPostFn).toHaveBeenCalledWith(expectPath, testNotice);
      });
    });
  });

  describe('NoticeCategoryService', () => {
    const spyGetFn = jest.spyOn(feAxios, 'get').mockReturnValue(Promise.resolve([]));
    describe('getNoticeCategory', () => {
      test('상품고시정보 유형 조회 URL 경로로 요청이 실행 되어야 한다.', () => {
        const seq = 1;
        const expectPath = `${NoticeCategoryService.baseUrl}/${seq}`;
        NoticeCategoryService.getNoticeCategory(seq);
        expect(spyGetFn).toHaveBeenCalledWith(expectPath);
      });
    });
    describe('getNoticeCategoryList', () => {
      test('상품고시정보 유형 목록 조회 URL 경로로 요청이 실행되어야 한다.', () => {
        const keyword = 'test';
        const brandCode = 'A410';
        NoticeCategoryService.getNoticeCategoryList({ brandCode, keyword });
        expect(spyGetFn).toHaveBeenCalledWith(
          `${NoticeCategoryService.baseUrl}?${toQueryParams({ brandCode, keyword })}`
        );
      });
    });

    const testNoticeCategory: NoticeCategory = {
      seq: 0,
      name: 'T01',
      description: '테스트유형',
      useYn: 'Y',
      regId: 'test',
      regNm: '테스트사용자',
      regDateTime: '2023-10-10 00:00:00',
      updId: 'test2',
      updNm: '테스트사용자2',
      updDateTime: '2023-10-10 00:00:00',
    };
    describe('postNoticeCategory', () => {
      test('상품고시정보 유형 등록 URL 경로로 요청이 실행되어야 한다.', () => {
        const spyPostFn = jest
          .spyOn(feAxios, 'post')
          .mockReturnValue(Promise.resolve({ result: true }));
        const expectPath = `${NoticeCategoryService.baseUrl}/0`;
        NoticeCategoryService.postNoticeCategory(testNoticeCategory);
        expect(spyPostFn).toHaveBeenCalledWith(expectPath, testNoticeCategory);
      });
    });

    describe('patchNoticeCategory', () => {
      test('상품고시정보 유형 등록 URL 경로로 요청이 실행되어야 한다.', () => {
        const spyPostFn = jest
          .spyOn(feAxios, 'patch')
          .mockReturnValue(Promise.resolve({ result: true }));
        const expectPath = `${NoticeCategoryService.baseUrl}/0`;
        NoticeCategoryService.patchNoticeCategory(testNoticeCategory);
        expect(spyPostFn).toHaveBeenCalledWith(expectPath, testNoticeCategory);
      });
    });
  });
});

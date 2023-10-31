import { HistoryListResponse } from 'src/interface/system/history/History';

export const loginHistoryMock: HistoryListResponse = {
  list: [
    {
      no: 1,
      id: 'testUser1',
      name: '테스트유저',
      ip: '.111..111..111.111',
      work: '로그인',
      result: true,
      date: '2023-01-01 00:00:00',
      etc: '',
    },
  ],
  pagination: {
    last: false,
    first: true,
    totalElements: 120,
    start: 11,
    end: 20,
    size: 10,
    curPage: 2,
  },
};

export const modifyHistoryMock: HistoryListResponse = {
  list: [
    {
      no: 1,
      id: 'testUser1',
      name: '테스트유저',
      ip: '.111..111..111.111',
      menu: '거래처 관리 > 브랜드',
      work: `사업자명 : ㈜위대한상상
사업자번호 : 211-88-38802
사업자등록증 : 사업자등록증.pdf
업태 : 도매 및 소매업
종목 : 전자상거래 소매업
대표자명 : 서성원
대표 전화번호 : 1661-5270
주소 : 06655 서울특별시 서초구 서초대로 38길 12 마제스타시티 타워2 17층
사업자 연동여부 : 연동안함
담당자명 : 홍길동
담당자 전화번호 : 010-1234-5678
담당자 이메일 주소 : yogiyo@yogiyo.co.kr
`,
      type: 'C',
      date: '2023-01-01 00:00:00',
    },
    {
      no: 2,
      id: 'testUser1',
      name: '테스트유저',
      ip: '.111..111..111.111',
      menu: '거래처 관리 > 브랜드',
      work: `사업자명 : ㈜위대한상상
사업자번호 : 211-88-38802
`,
      type: 'U',
      date: '2023-01-01 00:00:00',
    },
    {
      no: 6,
      id: 'testUser1',
      name: '테스트유저',
      ip: '.111..111..111.111',
      menu: '거래처 관리 > 브랜드',
      work: ``,
      type: 'D',
      date: '2023-01-01 00:00:00',
    },
  ],
  pagination: {
    last: false,
    first: true,
    totalElements: 120,
    start: 11,
    end: 20,
    size: 10,
    curPage: 2,
  },
};

export const informationReadHistoryMock = {
  list: [
    {
      no: 1,
      id: 'testUser1',
      name: '테스트유저',
      ip: '.111..111..111.111',
      menu: '거래처 관리 > 브랜드',
      work: '마스킹 해제',
      date: '2023-01-01 00:00:00',
    },
  ],
  pagination: {
    last: false,
    first: true,
    totalElements: 120,
    start: 11,
    end: 20,
    size: 10,
    curPage: 2,
  },
};

export const firstMenuMock = [
  { code: 'M01', name: '거래처관리' },
  { code: 'M02', name: '상품관리' },
  { code: 'M03', name: '통계관리' },
  { code: 'M04', name: '쿠폰관리' },
  { code: 'M05', name: '발행/발송 관리' },
  { code: 'M06', name: '시스템 관리' },
];

export const secondMenuMock = [
  { code: 'M0101', name: '사업자' },
  { code: 'M0102', name: '브랜드' },
  { code: 'M0103', name: '판매체널' },

  { code: 'M0201', name: '기본상품' },
  { code: 'M0202', name: '판매상품' },
  { code: 'M0203', name: '상품 고시정보' },
  { code: 'M0204', name: '상품 공급 수수료' },
  { code: 'M0205', name: '상품 판매 수수료' },

  { code: 'M0301', name: '일반거래신청서' },
  { code: 'M0302', name: '연동거래신청서' },

  { code: 'M0401', name: '매출집계' },
  { code: 'M0402', name: '판매 선수금 집계' },
  { code: 'M0403', name: '유효기간 통계' },
  { code: 'M0404', name: '인지세 납부대상 내역' },

  { code: 'M0501', name: '상품권 조회' },

  { code: 'M0601', name: '프리픽스' },
  { code: 'M0602', name: '발송 템플릿' },
  { code: 'M0603', name: '인지세 필증번호' },

  { code: 'M0701', name: '운영자' },
  { code: 'M0702', name: '권한' },
  { code: 'M0703', name: '메뉴' },
  { code: 'M0704', name: '판매정책' },
  { code: 'M0705', name: 'MPI 그룹' },
  { code: 'M0706', name: 'MPI 사용권한' },
  { code: 'M0707', name: '공지사항' },
  { code: 'M0708', name: '감사기록관리' },
  { code: 'M0709', name: '공토코드관리' },
];

export const thirdMenuMock = [
  { code: 'M030101', name: '신청서정보' },
  { code: 'M030101', name: '상품정보' },
  { code: 'M030201', name: '신청서정보' },
  { code: 'M030202', name: '상품정보' },

  { code: 'M050101', name: '발행정보' },
  { code: 'M050102', name: '발송정보' },
  { code: 'M050103', name: '사용내역' },
  { code: 'M050104', name: '처리내역' },
];

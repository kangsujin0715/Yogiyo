export const enum CouponFilterType {
  INPUT = '1',
  SELECT = '2',
  DATE = '3',
}

export interface CouponFilterTypes {
  title: string;
  options: [];
  type: CouponFilterType;
}

export const CouponFilterTypes = [
  {
    no: '0',
    title: '발행 요청정보',
    options: [{ title: '전체', typeValue: 1 }],
    type: CouponFilterType.INPUT,
  },
  {
    no: '1',
    title: '상품권 번호',
    options: [{ title: '전체', typeValue: 1 }],
    type: CouponFilterType.INPUT,
  },
  {
    no: '2',
    title: '수신자 번호',
    options: [{ title: '전체', typeValue: 1 }],
    type: CouponFilterType.INPUT,
  },
  {
    no: '3',
    title: '상품권 상태',
    options: [
      { title: '전체', typeValue: 1 },
      { title: 'test2', typeValue: 2 },
      { title: 'test3', typeValue: 3 },
    ],
    type: CouponFilterType.SELECT,
  },
  {
    no: '4',
    title: '사용여부',
    options: [
      { title: '전체', typeValue: 1 },
      { title: 'test2', typeValue: 2 },
      { title: 'test3', typeValue: 3 },
    ],
    type: CouponFilterType.SELECT,
  },
  {
    no: '5',
    title: '판매채널',
    options: [
      { title: '전체', typeValue: 1 },
      { title: 'test2', typeValue: 2 },
      { title: 'test3', typeValue: 3 },
    ],
    type: CouponFilterType.SELECT,
  },
  {
    no: '6',
    title: '신청서 구분',
    options: [
      { title: '전체', typeValue: 1 },
      { title: 'test2', typeValue: 2 },
      { title: 'test3', typeValue: 3 },
    ],
    type: CouponFilterType.SELECT,
  },
  {
    no: '7',
    title: '신청서명',
    options: [
      { title: '전체', typeValue: 1 },
      { title: 'test2', typeValue: 2 },
      { title: 'test3', typeValue: 3 },
    ],
    type: CouponFilterType.INPUT,
  },
  {
    no: '8',
    title: '상품종류',
    options: [
      { title: '전체', typeValue: 1 },
      { title: 'test2', typeValue: 2 },
      { title: 'test3', typeValue: 3 },
    ],
    type: CouponFilterType.SELECT,
  },
  {
    no: '9',
    title: '발행일시',
    options: [{ title: '전체', typeValue: 1 }],
    type: CouponFilterType.DATE,
  },
];

export interface CouponManageVO {
  orderNo: string;
  giftNo: string;
  receiverNo: string;
  giftName: string;
  giftStatus: string;
  giftUse: string;
  giftChannel: string;
  applyCategory: string;
  applyName: string;
  giftType: string;
  date: string;
}

export const CouponManageList_mock = [
  {
    orderNo: '123456789',
    giftNo: '1234****4567',
    receiverNo: '010-****-4838',
    giftName: '요기요 1만원원',
    giftStatus: '발행',
    giftUse: '사용안함',
    giftChannel: '요기요',
    applyCategory: '연동',
    applyName: '요기요 연동서비스',
    giftType: '요기요 상품권',
    date: '1999-01-01 09:54:24',
  },
  {
    orderNo: '234562356',
    giftNo: '1234****4567',
    receiverNo: '010-****-4838',
    giftName: '요기요 1만원원',
    giftStatus: '발행',
    giftUse: '사용안함',
    giftChannel: '요기요',
    applyCategory: '연동',
    applyName: '요기요 연동서비스',
    giftType: '요기요 상품권',
    date: '1999-01-01 09:54:24',
  },
  {
    orderNo: '13561356',
    giftNo: '1234****4567',
    receiverNo: '010-****-4838',
    giftName: '요기요 1만원원',
    giftStatus: '발행',
    giftUse: '사용안함',
    giftChannel: '요기요',
    applyCategory: '연동',
    applyName: '요기요 연동서비스',
    giftType: '요기요 상품권',
    date: '1999-01-01 09:54:24',
  },
  {
    orderNo: '14571745',
    giftNo: '1234****4567',
    receiverNo: '010-****-4838',
    giftName: '요기요 1만원원',
    giftStatus: '발행',
    giftUse: '사용안함',
    giftChannel: '요기요',
    applyCategory: '연동',
    applyName: '요기요 연동서비스',
    giftType: '요기요 상품권',
    date: '1999-01-01 09:54:24',
  },
];

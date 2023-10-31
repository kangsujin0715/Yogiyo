import { jest } from '@jest/globals';
import { CouponService } from 'src/services/coupon/CouponService';
import mockData from './couponList.mock.json';
import { Coupon } from 'src/interface/coupon/GiftVO';
import { feAxios } from 'src/net/customAxios';

describe('getCouponList', () => {
  const payload = {
    compName: 'test',
    page: 1,
    size: 10,
  };

  beforeEach(() => {
    //mock
    jest
      .spyOn(feAxios, 'get')
      .mockClear()
      .mockReturnValue(mockData as unknown as Promise<Coupon[]>);
  });

  test('파라미터가 정상적으로 쿼리스트링으로 변환 돠어야한다.', async () => {
    //when
    await CouponService.getCouponList(payload);
    //then
    expect(feAxios.get).toBeCalledWith(
      '/api/coupon/list?compName=test&perPageNum=10',
    );
  });

  test('요청 데이터가 정상적으로 반환되어야 한다.', async () => {
    //when
    const result = await CouponService.getCouponList(payload);
    //then
    expect(result).toEqual(mockData);
  });

  test('요청 실패시 reject 처리 되어야한다.', () => {
    jest.spyOn(feAxios, 'get').mockClear().mockRejectedValue(null);
    const call = () => CouponService.getCouponList(payload);
    expect(call()).rejects.toEqual(null);
  });
});

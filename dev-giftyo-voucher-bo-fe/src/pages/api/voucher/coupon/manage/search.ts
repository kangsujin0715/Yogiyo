import { NextApiRequest, NextApiResponse } from 'next';
import { badRequestResponse, methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { searchCouponMock } from 'src/pages/api/voucher/coupon/manage/search.mock';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  if (method !== 'GET') {
    methodNotSupportedResponse(res);
  }
  const { couponNum } = query;
  const couponNumber = Number(couponNum);

  if (isNaN(couponNumber)) {
    badRequestResponse(res, '검색조건을 확인 해 주세요');
    return;
  }
  res.status(200).json(searchCouponMock);
};

export default handler;

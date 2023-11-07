import { NextApiRequest, NextApiResponse } from 'next';
import { badRequestResponse, methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import {
  couponDetailMock
} from "src/pages/api/voucher/coupon/manage/detail/coupondetail.mock";

/**
 *
 * 쿠폰상세정보 데이터
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns {Promise<void>}
 * @author jockbal@coopnc.com
 * @since 2023.11.03
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  if (method !== 'GET') {
    methodNotSupportedResponse(res);
  }
  const { couponNum } = query;
  const couponNumber = Number(couponNum);

  if (isNaN(couponNumber)) {
    badRequestResponse(res, '조건을 확인 해 주세요');
    return;
  }
  res.status(200).json(couponDetailMock);
};

export default handler;

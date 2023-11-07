import { NextApiRequest, NextApiResponse } from 'next';
import { badRequestResponse, methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { couponSendHistoryMock } from 'src/pages/api/voucher/coupon/manage/sendHistory.mock';

/**
 *
 * 쿠폰상세정보 발송내역 리스트
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
  res.status(200).json(couponSendHistoryMock);
};

export default handler;

import { NextApiRequest, NextApiResponse } from 'next';
import { beAxios } from 'src/net/customAxios';
import { methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { BEApiResponse } from 'src/interface/responseData';
import { Coupon } from 'src/interface/coupon/GiftVO';

const BE_GIFT_API_PATH = 'https://twebapi.booknlife.com/api/coopgift';

/**
 * gift list api request handler
 * @params req : 요청정보
 * @params res : 응답정보
 *
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  if (method === 'GET') {
    //FIXME: 데이터가 2중으로 wrapping 되어있어 사용시 유의
    const result: BEApiResponse<CouponResponse> = await beAxios.post(
      `${BE_GIFT_API_PATH}/getbestlist`,
      query,
    );
    res.status(200).json(result.ResultData.data.list);
  }
  methodNotSupportedResponse(res);
};

interface CouponResponse {
  data: {
    list: Coupon[];
  };
}

export default handler;

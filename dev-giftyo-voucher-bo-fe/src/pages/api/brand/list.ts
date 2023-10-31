import { NextApiRequest, NextApiResponse } from 'next';
import {
  methodNotSupportedResponse,
  toQueryParams,
} from 'src/common/utils/commonUtils';
import { beAxios } from 'src/net/customAxios';

const BE_BRAND_API_PATH = '/api/CoopGift/GetBrandList';

/**
 * brand list api request handler
 * @params req : 요청정보
 * @params res : 응답정보
 *
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  if (method === 'GET') {
    const result = beAxios.get(
      `${BE_BRAND_API_PATH}/list/${toQueryParams(query)}`,
    );
    res.status(200).json(result);
  }
  methodNotSupportedResponse(res);
};
export default handler;

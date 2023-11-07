import { NextApiRequest, NextApiResponse } from 'next';
import { methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { brandList } from 'src/pages/api/brand/brand.mock';

/**
 * brand list api request handler
 * @params req : 요청정보
 * @params res : 응답정보
 *
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method === 'GET') {
    res.status(200).json(brandList);
  }
  methodNotSupportedResponse(res);
};
export default handler;

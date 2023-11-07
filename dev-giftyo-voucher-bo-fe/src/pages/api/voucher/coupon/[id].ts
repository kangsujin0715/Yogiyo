import { NextApiRequest, NextApiResponse } from 'next';
import { beAxios } from 'src/net/customAxios';
import { methodNotSupportedResponse } from 'src/common/utils/commonUtils';

const BE_GIFT_API_PATH = '/be-api/gift';

/**
 * gift api request handler
 * @params req : 요청정보
 * @params res : 응답정보
 *
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req;
  if (method === 'GET') {
    const result = beAxios.get(`${BE_GIFT_API_PATH}/${query.id}`);
    res.status(200).json(result);
  }

  if (method === 'POST') {
    // const result = beAxios.post(`${BE_GIFT_API_PATH}/${query.id}`, body);
    res.status(200).json({ data: true });
  }

  if (method === 'PATCH') {
    // const result = beAxios.patch(`${BE_GIFT_API_PATH}/${query.id}`, body);
    res.status(200).json({ data: true });
  }

  methodNotSupportedResponse(res);
};
export default handler;

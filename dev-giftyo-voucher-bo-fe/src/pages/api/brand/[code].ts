import { NextApiRequest, NextApiResponse } from 'next';
import { beAxios } from 'src/net/customAxios';
import { methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { BEApiResponse } from 'src/interface/responseData';
import { Brand } from 'src/interface/brand/BrandVO';

/** BACK-END Brand API 경로 FIXME:임시*/
const BE_BRAND_API_PATH = '/be-api/brand';

/**
 * brand api request handler
 * @params req : 요청정보
 * @params res : 응답정보
 *
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req;
  if (method === 'GET') {
    const result: BEApiResponse<Brand> = await beAxios.get(
      `${BE_BRAND_API_PATH}/${query.code}`,
    );
    res.status(200).json(result);
  }

  if (method === 'POST') {
    const result = beAxios.post(
      `${BE_BRAND_API_PATH}/${query.code ?? ''}`,
      body,
    );
    res.status(200).json(result);
  }

  if (method === 'PATCH') {
    const result = beAxios.patch(
      `${BE_BRAND_API_PATH}/${query.code ?? ''}`,
      body,
    );
    res.status(200).json(result);
  }

  methodNotSupportedResponse(res);
};
export default handler;

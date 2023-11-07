import { NextApiRequest, NextApiResponse } from 'next';
import { badRequestResponse, methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { productDetailMock } from 'src/pages/api/voucher/product/basic/detailInfo.mock';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  if (method !== 'GET') {
    methodNotSupportedResponse(res);
  }
  const { productNum } = query;
  const productNumber = Number(productNum);

  if (isNaN(productNumber)) {
    badRequestResponse(res, '조건을 확인 해 주세요');
    return;
  }
  res.status(200).json(productDetailMock);
};

export default handler;

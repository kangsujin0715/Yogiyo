import { NextApiRequest, NextApiResponse } from 'next';
import { badRequestResponse, methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { searchProductMock } from 'src/pages/api/voucher/product/basic/search.mock';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  if (method !== 'GET') {
    methodNotSupportedResponse(res);
  }
  const { codeNum } = query;
  const codeNumber = Number(codeNum);

  if (isNaN(codeNumber)) {
    badRequestResponse(res, '검색조건을 확인 해 주세요');
    return;
  }
  res.status(200).json(searchProductMock);
};

export default handler;

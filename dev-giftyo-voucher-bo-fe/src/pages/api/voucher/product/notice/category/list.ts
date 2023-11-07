import { NextApiRequest, NextApiResponse } from 'next';
import { methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { categoryMock } from 'src/pages/api/voucher/product/notice/category/category.mock';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method === 'GET') {
    res.status(200).json(categoryMock);
  }
  return methodNotSupportedResponse(res);
};

export default handler;

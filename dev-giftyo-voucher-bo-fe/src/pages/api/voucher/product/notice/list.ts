import { NextApiRequest, NextApiResponse } from 'next';
import { methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { noticeMock } from 'src/pages/api/voucher/product/notice/notice.mock';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method === 'GET') {
    return res.status(200).json(noticeMock);
  }
  return methodNotSupportedResponse(res);
};

export default handler;

import { NextApiRequest, NextApiResponse } from 'next';
import { methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { noticeMock } from 'src/pages/api/voucher/product/notice/notice.mock';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  if (method === 'GET') {
    const result = noticeMock.find(({ seq }) => seq === Number(query?.seq));
    return res.status(200).json(result);
  }
  if (method === 'POST') {
    return res.status(200).json({ result: true });
  }
  if (method === 'PATCH') {
    return res.status(200).json({ result: true });
  }
  methodNotSupportedResponse(res);
};

export default handler;

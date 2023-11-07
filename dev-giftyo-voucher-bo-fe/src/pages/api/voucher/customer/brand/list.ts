import { NextApiRequest, NextApiResponse } from 'next';
import { methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { brandListMock } from 'src/pages/api/voucher/customer/brand/list.mock';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== 'GET') {
    methodNotSupportedResponse(res);
    return;
  }

  const responseMock = {
    code: '0000',
    message: '정상처리',
    data: {
      list: brandListMock,
    },
  };

  res.status(200).json(responseMock);
};
export default handler;

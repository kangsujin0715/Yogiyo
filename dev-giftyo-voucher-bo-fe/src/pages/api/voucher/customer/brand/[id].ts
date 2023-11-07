import { NextApiRequest, NextApiResponse } from 'next';
import { methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { brandListMock } from 'src/pages/api/voucher/customer/brand/list.mock';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;

  const responseMock = {
    code: '0000',
    message: '정상 처리되었습니다.',
  };

  if (method === 'GET') {
    const { id } = query;
    const data = brandListMock.find((data) => data.no.toString() === id);

    const response = {
      ...responseMock,
      data: data,
    };

    return res.status(200).json(response);
  }

  if (method === 'POST') {
    return res.status(200).json(responseMock);
  }

  if (method === 'PATCH') {
    return res.status(200).json(responseMock);
  }

  methodNotSupportedResponse(res);
};
export default handler;

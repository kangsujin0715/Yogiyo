import { NextApiRequest, NextApiResponse } from 'next';
import { badRequestResponse, methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { firstMenuMock, secondMenuMock, thirdMenuMock } from './history.mock';

const menuMockList = [firstMenuMock, secondMenuMock, thirdMenuMock];

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  if (method !== 'GET') methodNotSupportedResponse(res);
  const { depth, code } = query;
  const menuDepth = Number(depth);
  if (isNaN(menuDepth) || menuDepth > 2 || menuDepth < 0) {
    badRequestResponse(res, '메뉴 차수를 확인 해 주세요.');
    return;
  }
  const result = menuMockList[menuDepth];
  const isFirstDepth = menuDepth === 0;
  res
    .status(200)
    .json(isFirstDepth ? result : result.filter((menu) => menu.code.startsWith(code as string)));
};

export default handler;

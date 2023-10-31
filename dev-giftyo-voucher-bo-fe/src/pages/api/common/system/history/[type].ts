import { NextApiRequest, NextApiResponse } from 'next';
import { badRequestResponse, methodNotSupportedResponse } from 'src/common/utils/commonUtils';
import { HistoryType } from 'src/interface/system/history/History';
import {
  informationReadHistoryMock,
  loginHistoryMock,
  modifyHistoryMock,
} from 'src/pages/api/common/system/history/history.mock';

const typeMapper = {
  [HistoryType.login.toString()]: '/be-api/system/history/login',
  [HistoryType.read.toString()]: '/be-api/system/history/read',
  [HistoryType.modify.toString()]: '/be-api/system/history/modify',
  [HistoryType.upload.toString()]: '/be-api/system/history/upload',
  [HistoryType.download.toString()]: '/be-api/system/history/download',
};

const mockResultMapper = {
  [HistoryType.login.toString()]: loginHistoryMock,
  [HistoryType.modify.toString()]: modifyHistoryMock,
  [HistoryType.read.toString()]: informationReadHistoryMock,
  [HistoryType.upload.toString()]: informationReadHistoryMock,
  [HistoryType.download.toString()]: informationReadHistoryMock,
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  if (method !== 'GET') methodNotSupportedResponse(res);

  const { type } = query;
  if (typeof type !== 'string') {
    badRequestResponse(res, '이력 유형을 확인 해 주세요');
    return;
  }
  //FIXME : BE API 확인 후 처리
  /*const targetPath = typeMapper[type];
  const result = await beAxios.get<BEApiResponse<HistoryListResponse>>(
    `${targetPath}?${toQueryParams(query)}`
  );*/
  res.status(200).json(mockResultMapper[type]);
};

export default handler;

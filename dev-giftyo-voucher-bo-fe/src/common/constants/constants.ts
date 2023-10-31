import { FEApiResponse } from 'src/interface/responseData';

export const isDev =
  process.env.REACT_APP_ENV === 'dev' || process.env.REACT_APP_ENV === 'stg';

export const METHOD_NOT_SUPPORTED_RESULT: FEApiResponse<null> = {
  code: '405',
  message: 'method not supported',
  data: null,
};

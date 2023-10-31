import { jest } from '@jest/globals';
import {
  methodNotSupportedResponse,
  toQueryParams,
} from 'src/common/utils/commonUtils';
import { NextApiResponse } from 'next';
import { METHOD_NOT_SUPPORTED_RESULT } from 'src/common/constants/constants';

describe('toQueryParams', () => {
  //given
  const params = { keyword: 'test', page: 1, perPage: 10 };

  test('object 가 주어 지면 query string 형태로 반환해야한다.', () => {
    const result = toQueryParams(params);
    expect(result).toEqual('keyword=test&page=1&perPage=10');
  });
});
describe('methodNotSupportedResponse', () => {
  //given
  const jsonMock = jest.fn();
  const statusMock = jest.fn().mockReturnValue({
    json: jsonMock,
  });
  const mockResponse = {
    status: statusMock,
  } as unknown as NextApiResponse;

  test('405 status 를 응답해야한다.', () => {
    //when
    methodNotSupportedResponse(mockResponse);
    //then
    expect(statusMock).toBeCalledWith(405);
  });

  test('METHOD_NOT_SUPPORTED_RESULT 객체를 응답 해야한다.', () => {
    //when
    methodNotSupportedResponse(mockResponse);
    //then
    expect(jsonMock).toBeCalledWith(METHOD_NOT_SUPPORTED_RESULT);
  });
});

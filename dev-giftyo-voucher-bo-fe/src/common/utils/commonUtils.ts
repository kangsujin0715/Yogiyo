import { NextApiResponse } from 'next';
import { METHOD_NOT_SUPPORTED_RESULT } from 'src/common/constants/constants';

interface tokenInfo {
  exp: number;
  inf: Inf;
}

interface Inf {
  userid: string;
}

export const removeComma = (x: string | number): string => x.toString().replace(/[^\d]+/g, '');

export const isExpiredToken = (token: string) => {
  const { exp } = decodeToken(token);
  return isExpired(exp);
};

export const getExpireDateFromToken = (token: string) => {
  const { exp } = decodeToken(token);
  return getExpireDate(exp);
};

export const getUserInfoFromToken = (token: string) => {
  const { inf } = decodeToken(token);
  return inf;
};

const decodeToken = (token: string) => {
  // TODO: some decode function ...
  return JSON.parse(token);
};

const isExpired = (expireTime: number) => expireTime - new Date().getTime() < 600000;

const getExpireDate = (expireTime: number) => {
  return isExpired(expireTime) ? new Date(new Date().getTime() + 601000) : new Date(expireTime);
};

/**
 * 객체 -> 쿼리 문자열 변환
 * @param args
 * @returns {string}
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
export const toQueryParams = (args: any) => new URLSearchParams(args).toString();

/**
 * 지원하지 않는 메소드 오류 응답 반환 함수
 * @param {NextApiResponse} res
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
export const methodNotSupportedResponse = (res: NextApiResponse) =>
  res.status(405).json(METHOD_NOT_SUPPORTED_RESULT);

/**
 * 잘못된 요청 응답 반환 함수
 * @param {NextApiResponse} res
 * @param {string} message
 * @since 2023.10.26
 * @author : yhju@coopnc.com
 */
export const badRequestResponse = (res: NextApiResponse, message: string) =>
  res.status(400).json({ message });

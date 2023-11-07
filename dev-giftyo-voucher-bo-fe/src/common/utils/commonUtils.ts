import { NextApiResponse } from 'next';
import { METHOD_NOT_SUPPORTED_RESULT } from 'src/common/constants/constants';
import { Order } from 'src/components/ui/table/common/stuff/CommonTableHeader';

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

const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = <Key extends keyof never>(
  order: Order,
  orderBy: Key
): ((a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

export const stableSort = <T>(array: readonly T[], comparator: (a: T, b: T) => number) => {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

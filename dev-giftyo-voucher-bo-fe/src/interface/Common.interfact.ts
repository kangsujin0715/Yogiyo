export type YN = 'Y' | 'N';

export interface BaseData {
  no?: number;
  regId: string;
  regNm: string;
  regDateTime: string;
  updId?: string;
  updNm?: string;
  updDateTime?: string;
}

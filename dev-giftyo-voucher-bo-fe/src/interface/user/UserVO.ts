export interface UserVO {
  accessToken: string;
  refreshToken: string;
  membNm: string;
  membId: string;
  membMail: string;
  membBirth: string;
  membSex: string;
  hpNo: string;
  actStat: string;
  useLimitType: string;
  cashLimitAmt: string;
  cashBal: string;
  mailAgreYn: string;
  smsAgreYn: string;
  pushMktAgreYn: string;
  pushSysAgreYn: string;
  lastPushAgreChg: string;
  lastPwChgDate: string;
  joinRegType: string;
  agreUpdYn: string;
  loginLogId: string;
  membStat: string;
  duplPopYn: string;
  DuplMembList?: AccountInfo[];
  cashHoldLimitAmt: number;
  cashHoldLimitAmtTxt: string;
  cashHoldLimitOverYn: string;
  cashHoldLimitExcptYn: string;
}

export interface AccountInfo {
  membId: string;
  cashBal: string;
  membStat: string;
}

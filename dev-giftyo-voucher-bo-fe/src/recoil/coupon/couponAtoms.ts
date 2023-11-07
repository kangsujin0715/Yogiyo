import { atom } from 'recoil';
import { CouponAtomKeys } from 'src/recoil/coupon/couponAtomKeys';
import { CouponSearchFilter } from 'src/interface/coupon/CouponManage.interface';

export const couponCountAtom = atom<number>({
  key: CouponAtomKeys.COUPON_COUNT,
  default: 0,
});

export const initializeCouponSearchFilter: CouponSearchFilter = {
  issueNum: '',
  couponNum: '',
  receiverNum: '',
  couponType: '',
  useYn: '',
  sellingChannel: '',
  formType: '',
  formName: '',
  productType: '',
  date: '',
  size: 10,
  page: 1,
};

/**
 * 상품권 관리 조회
 * @type {RecoilState<couponManageSearchFilter>}
 */
export const couponManageSearchFilter = atom<CouponSearchFilter>({
  key: CouponAtomKeys.COUPON_MANAGE,
  default: initializeCouponSearchFilter,
});

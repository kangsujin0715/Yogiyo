import { atom } from 'recoil';
import { CouponAtomKeys } from 'src/recoil/coupon/couponAtomKeys';

export const couponCountAtom = atom<number>({
  key: CouponAtomKeys.COUPON_COUNT,
  default: 0,
});

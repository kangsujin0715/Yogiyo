import { useRecoilValue } from 'recoil';
import { couponCountAtom } from 'src/recoil/coupon/couponAtoms';

export const Count = () => {
  const count = useRecoilValue(couponCountAtom);

  return <div>{count}</div>;
};

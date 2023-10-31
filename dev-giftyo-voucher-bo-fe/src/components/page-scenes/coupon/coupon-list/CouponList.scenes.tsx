import Image from 'next/image';
import { useCouponAddCart, useCouponList } from 'src/query/coupon/useCoupon';

/**
 * 쿠폰 목록 데이터 레이어 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
const CouponListScenes = () => {
  const { data } = useCouponList();
  const { mutate } = useCouponAddCart({
    onSuccess: () => alert('장바구니 등록 완료'),
  });
  return (
    <div>
      <h1>CouponList Page</h1>
      <h2>쿠폰 리스트</h2>
      {data?.length &&
        data.map((coupon) => (
          <div key={coupon.servIdx}>
            <Image
              src={coupon.imgPath}
              width={80}
              height={80}
              alt={'CoopGift'}
            />
            <p>{coupon.servMenuName}</p>
            <span>{coupon.servCode}</span>
            <button onClick={() => mutate(coupon)}> Add cart</button>
          </div>
        ))}
    </div>
  );
};

export default CouponListScenes;

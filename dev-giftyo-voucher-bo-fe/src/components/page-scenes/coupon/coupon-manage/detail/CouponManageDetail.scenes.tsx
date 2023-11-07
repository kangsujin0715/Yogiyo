import { Stack } from '@mui/material';
import CouponManageDetailFunctionBox from 'src/components/page-scenes/coupon/coupon-manage/detail/CouponManageDetailFunctionBox';
import CoupoMnanageDetailInfoLeft from 'src/components/page-scenes/coupon/coupon-manage/detail/CoupoMnanageDetailInfoLeft';
import CouponManageDetailInfoRight from 'src/components/page-scenes/coupon/coupon-manage/detail/CouponManageDetailInfoRight';
import { useCouponDetail } from 'src/query/coupon/useCoupon';

interface Props {
  couponNum: string;
}

/**
 *
 * 상품권 관리 > 리스트 > 상세화면
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.30
 */
const CouponManageDetailScenes = (props: Props) => {
  const { data } = useCouponDetail({ couponNum: props.couponNum });

  return (
    <>
      <CouponManageDetailFunctionBox />
      <Stack direction="row" spacing={1}>
        {!!data && <CoupoMnanageDetailInfoLeft data={data.data} />}
        <CouponManageDetailInfoRight />
      </Stack>
    </>
  );
};

export default CouponManageDetailScenes;

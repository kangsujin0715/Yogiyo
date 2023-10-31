import CouponManageFilter from 'src/components/page-scenes/coupon/coupon-manage/Coupon-manage-filter';
import CouponManageListFunction from 'src/components/page-scenes/coupon/coupon-manage/Coupon-manage-list-function';
import CouponManageListt from 'src/components/page-scenes/coupon/coupon-manage/Coupon-manage-list';
import Container from '@mui/material/Container';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.23
 */
const CouponManage = () => {
  return (
    <>
      <Container fixed>
        <CouponManageFilter />
        <CouponManageListFunction />
        <CouponManageListt />
      </Container>
    </>
  );
};

export default CouponManage;

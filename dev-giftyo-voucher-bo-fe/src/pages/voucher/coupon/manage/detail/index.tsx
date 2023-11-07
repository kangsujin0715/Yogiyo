import { NextPageWithLayout } from 'src/pages/_app';
import { QueryErrorBoundary } from 'src/components/common/error/boundary/QueryErrorBoundary';
import CouponManageDetailScenes from 'src/components/page-scenes/coupon/coupon-manage/detail/CouponManageDetail.scenes';

const CouponManageDetailPage: NextPageWithLayout = () => {
  return (
    <QueryErrorBoundary>
      <CouponManageDetailScenes couponNum={'123123'} />
    </QueryErrorBoundary>
  );
};

export default CouponManageDetailPage;

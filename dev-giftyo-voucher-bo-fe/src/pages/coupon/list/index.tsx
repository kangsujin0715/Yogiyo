import CouponListScenes from 'src/components/page-scenes/coupon/coupon-list/CouponList.scenes';
import { NextPageWithLayout } from 'src/pages/_app';
import { QueryErrorBoundary } from 'src/components/common/error/boundary/QueryErrorBoundary';

const CouponListPage: NextPageWithLayout = () => {
  return (
    <QueryErrorBoundary>
      <CouponListScenes />
    </QueryErrorBoundary>
  );
};

export default CouponListPage;

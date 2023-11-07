import { NextPageWithLayout } from "src/pages/_app";
import CouponManageScenes
  from "src/components/page-scenes/coupon/coupon-manage/search/CouponManage.scenes";
import {
  QueryErrorBoundary
} from "src/components/common/error/boundary/QueryErrorBoundary";

const CouponManagePage: NextPageWithLayout = () => {
  return (
    <QueryErrorBoundary>
      <CouponManageScenes />
    </QueryErrorBoundary>
  );
};

export default CouponManagePage;

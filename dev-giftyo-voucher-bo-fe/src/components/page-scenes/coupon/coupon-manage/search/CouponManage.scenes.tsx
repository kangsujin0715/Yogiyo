import CouponManageFilter from 'src/components/page-scenes/coupon/coupon-manage/search/CouponManageFilter';
import CouponManageList from 'src/components/page-scenes/coupon/coupon-manage/search/CouponManageList';
import { useState } from 'react';
import { initializeCouponSearchFilter } from 'src/recoil/coupon/couponAtoms';
import { useCouponList } from 'src/query/coupon/useCoupon';
import { CouponSearchFilter } from 'src/interface/coupon/CouponManage.interface';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.23
 */
const CouponManageScenes = () => {
  const [searchParams, setSearchParams] = useState<CouponSearchFilter>(
    initializeCouponSearchFilter
  );
  const { data } = useCouponList(searchParams);

  return (
    <>
      <CouponManageFilter onSearch={(filter) => setSearchParams(filter)} />
      {!!data && <CouponManageList data={data} />}
    </>
  );
};

export default CouponManageScenes;

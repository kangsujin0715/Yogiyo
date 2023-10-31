import { useRouterQuery } from 'src/hooks/useRouterQuery';

type DetailParams = {
  product: string;
};

const CouponDetail = () => {
  const params = useRouterQuery<DetailParams>();

  return <div>CouponDetail Page {params.product}</div>;
};
export default CouponDetail;

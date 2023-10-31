import { NextPageWithLayout } from 'src/pages/_app';
import { QueryErrorBoundary } from 'src/components/common/error/boundary/QueryErrorBoundary';
import CustomerAddScenes from "src/components/page-scenes/customer/CustomerAdd.scenes";

const CustomerAddPage: NextPageWithLayout = () => {
  return (
    <QueryErrorBoundary>
      <CustomerAddScenes />
    </QueryErrorBoundary>
  );
};

export default CustomerAddPage;

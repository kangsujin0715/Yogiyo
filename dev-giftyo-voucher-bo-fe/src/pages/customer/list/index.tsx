import CustomerListScenes from 'src/components/page-scenes/customer/CustomerList.scenes';
import { NextPageWithLayout } from 'src/pages/_app';
import { QueryErrorBoundary } from 'src/components/common/error/boundary/QueryErrorBoundary';

const CustomerListPage: NextPageWithLayout = () => {
  return (
    <QueryErrorBoundary>
      <CustomerListScenes />
    </QueryErrorBoundary>
  );
};

export default CustomerListPage;

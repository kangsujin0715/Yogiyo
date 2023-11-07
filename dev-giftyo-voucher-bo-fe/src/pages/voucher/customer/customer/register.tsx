import { NextPageWithLayout } from 'src/pages/_app';
import { QueryErrorBoundary } from 'src/components/common/error/boundary/QueryErrorBoundary';
import CustomerRegisterScenes from 'src/components/page-scenes/customer/customer/CustomerRegister.scenes';

const CustomerAddPage: NextPageWithLayout = () => {
  return (
    <QueryErrorBoundary>
      <CustomerRegisterScenes />
    </QueryErrorBoundary>
  );
};

export default CustomerAddPage;

import { NextPageWithLayout } from 'src/pages/_app';
import { QueryErrorBoundary } from 'src/components/common/error/boundary/QueryErrorBoundary';
import ProductManageSearchScenes from 'src/components/page-scenes/product/basic/ProductManageSearch.scenes';

const ProductManageBackSearch: NextPageWithLayout = () => {
  return (
    <QueryErrorBoundary>
      <ProductManageSearchScenes />
    </QueryErrorBoundary>
  );
};

export default ProductManageBackSearch;

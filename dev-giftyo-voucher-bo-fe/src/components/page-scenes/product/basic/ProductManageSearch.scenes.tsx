import ProductManageList from 'src/components/page-scenes/product/basic/ProductManageList';
import ProductManageFilter from 'src/components/page-scenes/product/basic/ProductManageFilter';
import { ProductSearchFilter } from 'src/interface/product/BasicProduct.interface';
import { useState } from 'react';
import { initializeProductSearchFilter } from 'src/recoil/product/productAtoms';
import { useSearchProduct } from 'src/query/product/basic/useSearchProduct';
/**
 *
 * 상품관리 기본상품 검색 화면
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.11.02
 */
const ProductManageSearchScenes = () => {
  const [searchParams, setSearchParams] = useState<ProductSearchFilter>(
    initializeProductSearchFilter
  );
  const { data } = useSearchProduct(searchParams);

  return (
    <>
      <ProductManageFilter onSearch={(filter) => setSearchParams(filter)} />
      {!!data && <ProductManageList data={data} />}
    </>
  );
};

export default ProductManageSearchScenes;

import { atom } from 'recoil';
import { ProductAtomKeys } from 'src/recoil/product/productAtomkeys';
import { ProductSearchFilter } from 'src/interface/product/BasicProduct.interface';

export const initializeProductSearchFilter: ProductSearchFilter = {
  codeNum: '1',
  productName: '2',
  productType: 'A',
  brand: '4',
  price: '12',
  amount: '23',
  state: 'B',
  date: '66',
  size: 10,
  page: 1,
};

/**
 * 기본상품 관리 조회
 * @type {RecoilState<productManageSearchFilter>}
 */
export const productManageSearchFilter = atom<ProductSearchFilter>({
  key: ProductAtomKeys.PRODUCT_SEARCH,
  default: initializeProductSearchFilter,
});

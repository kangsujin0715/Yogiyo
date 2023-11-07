import { feAxios } from 'src/net/customAxios';
import { toQueryParams } from 'src/common/utils/commonUtils';
import { PRODUCT_API_PATH, ProductService } from 'src/services/product/basic/ProductSearchService';
import { initializeProductSearchFilter } from 'src/recoil/product/productAtoms';

describe('Product Basic Search', () => {
  describe('ProductSearchService', () => {
    const spyGetFn = jest.spyOn(feAxios, 'get').mockReturnValue(Promise.resolve([]));
    describe('getProductList', () => {
      test('상품관리 기본상품 조회 URL 경로로 요청이 실행 되어야 한다.', () => {
        ProductService.getProductList(initializeProductSearchFilter);
        expect(spyGetFn).toHaveBeenCalledWith(
          `${PRODUCT_API_PATH}/basic/search?${toQueryParams(initializeProductSearchFilter)}`
        );
      });
    });
    describe('getProductDetailInfo', () => {
      test('상품관리 기본상품 상세정보 조회 URL 경로로 요청이 실행되어야 한다.', () => {
        ProductService.getProductDetailInfo({ codeNum: '123' });
        expect(spyGetFn).toHaveBeenCalledWith(
          `${PRODUCT_API_PATH}/basic/detailInfo?${toQueryParams({ codeNum: '123' })}`
        );
      });
    });
  });
});

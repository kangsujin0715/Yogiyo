import { feAxios } from 'src/net/customAxios';
import { toQueryParams } from 'src/common/utils/commonUtils';
import {
  ProductDetailParam,
  ProductDetailResponse,
  ProductSearchFilter,
  ProductSearchResponse,
} from 'src/interface/product/BasicProduct.interface';

export const PRODUCT_API_PATH = '/api/voucher/product';
export const ProductService = {
  /**
   *
   * 상품관리 기본정보 상품목록 조회
   * @param {ProductSearchFilter} params
   * @returns {Promise<ProductSearchResponse>}
   * @author jockbal@coopnc.com
   * @since 2023.11.06
   */
  getProductList: async (params: ProductSearchFilter): Promise<ProductSearchResponse> => {
    console.log('getProductList', params);
    return feAxios.get(`${PRODUCT_API_PATH}/basic/search?${toQueryParams(params)}`);
  },

  /**
   *
   * 상품관리 기본정보 상품상세정보 조회
   * @param {ProductSearchFilter} params
   * @returns {Promise<ProductSearchResponse>}
   * @author jockbal@coopnc.com
   * @since 2023.11.06
   */
  getProductDetailInfo: async (params: ProductDetailParam): Promise<ProductDetailResponse> => {
    console.log('getProductDetailInfo', params);
    return feAxios.get(`${PRODUCT_API_PATH}/basic/detailInfo?${toQueryParams(params)}`);
  },
};

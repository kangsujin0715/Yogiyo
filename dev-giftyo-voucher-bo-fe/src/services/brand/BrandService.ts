import { feAxios } from 'src/net/customAxios';
import { toQueryParams } from 'src/common/utils/commonUtils';
import { Brand, BrandSearchPayload } from 'src/interface/brand/BrandVO';

const BRAND_API_PATH = '/api/brand';

export const BrandService = {
  /**
   * 브랜드 목록 조회
   * @param {BrandSearchPayload} payload
   * @returns {Promise<Brand[]>}
   * @author yhju@coopnc.com
   * @since 2023.10.18
   */
  getBrandList: (payload: BrandSearchPayload): Promise<Brand[]> =>
    feAxios.get(`${BRAND_API_PATH}/list?${toQueryParams(payload)}`),

  /**
   * 브랜드 상세 정보 조회
   * @param {string} code
   * @returns {Promise<Brand>}
   * @author yhju@coopnc.com
   * @since 2023.10.18
   */
  getBrand: (code: string): Promise<Brand> =>
    feAxios.get(`${BRAND_API_PATH}/${code}`),

  /**
   * 브랜드 등록
   * @param {Brand} brand
   * @returns {Promise<boolean>}
   * @author yhju@coopnc.com
   * @since 2023.10.18
   */
  postBrandList: (brand: Brand): Promise<boolean> =>
    feAxios.post(`${BRAND_API_PATH}`, brand),

  /**
   * 브랜드 수정
   * @param {Brand} brand
   * @returns {Promise<boolean>}
   * @author yhju@coopnc.com
   * @since 2023.10.18
   */
  updateBrand: (brand: Brand): Promise<boolean> =>
    feAxios.patch(`${BRAND_API_PATH}`, brand),
};

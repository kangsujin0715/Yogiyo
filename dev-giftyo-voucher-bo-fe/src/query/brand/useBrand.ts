import { useQuery } from 'react-query';
import { BrandKeys } from 'src/query/brand/brandKeys';
import { BrandSearchPayload } from 'src/interface/brand/BrandVO';
import { BrandService } from 'src/services/brand/BrandService';

/**
 * 브랜드 목록 hook
 * @param {BrandSearchPayload} params
 * @param options
 * @returns {UseQueryResult<Brand[], unknown>}
 */
export const useBrandList = (params: BrandSearchPayload, options?: any) =>
  useQuery(
    [BrandKeys.list, params],
    () => BrandService.getBrandList(params),
    options,
  );

/**
 * 브랜드 hook
 * @param {string} code
 * @param options
 * @returns {UseQueryResult<Brand, unknown>}
 */
export const useBrand = <R>(code: string, options?: any) =>
  useQuery(
    [BrandKeys.detail, code],
    () => BrandService.getBrand(code),
    options,
  );

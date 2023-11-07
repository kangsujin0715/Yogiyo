import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';
import {
  ProductDetailParam,
  ProductDetailResponse,
  ProductSearchFilter,
  ProductSearchResponse,
} from 'src/interface/product/BasicProduct.interface';
import { productQueryKeys } from 'src/query/product/basic/productBasicKeys';
import { ProductService } from 'src/services/product/basic/ProductSearchService';

export const useSearchProduct = (
  params: ProductSearchFilter,
  options?: UseQueryOptions<
    ProductSearchResponse,
    AxiosError,
    ProductSearchResponse,
    [string[], ProductSearchFilter | undefined]
  >
) =>
  useQuery([productQueryKeys.list, params], () => ProductService.getProductList(params), {
    ...options,
  });

export const useSearchProductDetail = (
  params: ProductDetailParam,
  options?: UseQueryOptions<
    ProductDetailResponse,
    AxiosError,
    ProductDetailResponse,
    [string[], ProductDetailParam | undefined]
  >
) =>
  useQuery([productQueryKeys.detail, params], () => ProductService.getProductDetailInfo(params), {
    ...options,
  });

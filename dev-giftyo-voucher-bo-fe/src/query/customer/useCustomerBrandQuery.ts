import { useQuery, UseQueryOptions } from 'react-query';
import { CustomerBrandService } from 'src/services/customer/CustomerBrandService';
import { customerKeys } from 'src/query/customer/customerKeys';
import { CustomerBrandListVO, CustomerBrandVO } from 'src/interface/customer/CustomerBrandVO';
import { AxiosError } from 'axios';

export interface CustomerBrandListPayload {
  franchiseId?: string;
  brandCode?: string;
  brandName?: string;
  corporationName?: string;
  registerDate?: string;
}

export const useCustomerBrandListQuery = ({
  params,
  options,
}: {
  params: CustomerBrandListPayload;
  options?: UseQueryOptions<
    CustomerBrandListVO,
    AxiosError,
    CustomerBrandVO[],
    [readonly string[], CustomerBrandListPayload]
  >;
}) =>
  useQuery([customerKeys.brandList(), params], () => CustomerBrandService.getBrandList(params), {
    select: (data) => data.list,
    ...options,
  });

export const useCustomerBrandDetailQuery = ({
  params,
  options,
}: {
  params: string;
  options?: UseQueryOptions<
    CustomerBrandVO,
    AxiosError,
    CustomerBrandVO,
    [readonly string[], string]
  >;
}) =>
  useQuery(
    [customerKeys.brandDetail(), params],
    () => CustomerBrandService.getBrandDetail(params),
    {
      ...options,
    }
  );

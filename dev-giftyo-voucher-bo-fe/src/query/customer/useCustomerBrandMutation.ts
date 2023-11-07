import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { CustomerBrandService } from 'src/services/customer/CustomerBrandService';
import { customerKeys } from 'src/query/customer/customerKeys';

export interface CustomerBrandRegisterPayload {
  franchiseId?: string;
  brandCode?: string;
  brandName?: string;
  corporationName?: string;
  registerDate?: string;
}

export const useBrandRegisterMutation = (
  options?: UseMutationOptions<unknown, AxiosError, CustomerBrandRegisterPayload>
) => {
  const queryClient = useQueryClient();

  return useMutation(CustomerBrandService.requestBrandRegister, {
    ...options,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries([customerKeys.brandList()]);
      options?.onSuccess?.(data, variables, context);
    },
    onError(error, variables, context) {
      options?.onError?.(error, variables, context);
    },
  });
};

export const useBrandUpdateMutation = (
  options?: UseMutationOptions<unknown, AxiosError, CustomerBrandRegisterPayload>
) => {
  const queryClient = useQueryClient();

  return useMutation(CustomerBrandService.requestBrandUpdate, {
    ...options,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries([customerKeys.brandList()]);
      options?.onSuccess?.(data, variables, context);
    },
    onError(error, variables, context) {
      options?.onError?.(error, variables, context);
    },
  });
};

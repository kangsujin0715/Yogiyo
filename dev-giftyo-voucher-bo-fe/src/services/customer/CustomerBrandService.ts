import { CustomerBrandListVO, CustomerBrandVO } from 'src/interface/customer/CustomerBrandVO';
import { feAxios } from 'src/net/customAxios';
import { toQueryParams } from 'src/common/utils/commonUtils';
import { CustomerBrandListPayload } from 'src/query/customer/useCustomerBrandQuery';
import { CustomerBrandRegisterPayload } from 'src/query/customer/useCustomerBrandMutation';

const prefix = '/api/voucher/customer/brand';
export const CustomerBrandService = {
  getBrandList: async (params: CustomerBrandListPayload): Promise<CustomerBrandListVO> => {
    const { data } = await feAxios.get<CustomerBrandListVO>(
      `${prefix}/list?${toQueryParams(params)}`
    );

    console.log('getBrandList res = ', data);
    return Promise.resolve(data);
  },
  getBrandDetail: async (id: string): Promise<CustomerBrandVO> => {
    const { data } = await feAxios.get<CustomerBrandVO>(`${prefix}/${id}`);

    console.log('getBrandDetail res = ', data);
    return Promise.resolve(data);
  },

  requestBrandRegister: async (param: CustomerBrandRegisterPayload): Promise<CustomerBrandVO> => {
    const { data } = await feAxios.post<CustomerBrandVO>(`${prefix}/${param.brandCode}`, param);

    console.log('requestBrandRegister res = ', data);
    return Promise.resolve(data);
  },

  requestBrandUpdate: async (param: CustomerBrandRegisterPayload): Promise<CustomerBrandVO> => {
    const { data } = await feAxios.patch<CustomerBrandVO>(`${prefix}/${param.brandCode}`, param);

    console.log('requestBrandUpdate res = ', data);
    return Promise.resolve(data);
  },
};

export type BasicFormType = {
  corporationName: string;
  brandName: string;
  zipCode: string;
  address: string;
  detailAddress: string;
};

export type CustomerFormType = {
  contactName: string;
  contactPhone: string;
  contactEmail: string;
};

export type UseFormType = {
  used: string;
};

export type BrandType = BasicFormType & CustomerFormType & UseFormType;

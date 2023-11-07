export interface CustomerBrandVO {
  no: number;
  franchiseId: string;
  brandCode: string;
  brandName: string;
  corporationName: string;
  registerDate: string;
}

export interface CustomerBrandListVO {
  list: CustomerBrandVO[];
}

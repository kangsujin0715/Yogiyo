import { ProductFilterFormsDataType } from 'src/interface/product/BasicProduct.interface';

export const FilterFormsData: ProductFilterFormsDataType[] = [
  {
    value: 'codeNum',
    name: '기본상품코드',
    type: 'input',
    menus: [],
  },
  {
    value: 'productName',
    name: '상품명',
    type: 'input',
    menus: [],
  },
  {
    value: 'productType',
    name: '상품종류',
    type: 'select',
    menus: [
      {
        tag: '1',
        title: 'A',
      },
      {
        tag: '2',
        title: 'B',
      },
    ],
  },
  {
    value: 'brand',
    name: '브랜드',
    type: 'input',
    menus: [],
  },
  {
    value: 'price',
    name: '권면가액',
    type: 'input',
    menus: [],
  },
  {
    value: 'amount',
    name: '판매상품수',
    type: 'input',
    menus: [],
  },
  {
    value: 'state',
    name: '사용상태',
    type: 'select',
    menus: [
      {
        tag: '3',
        title: 'C',
      },
      {
        tag: '4',
        title: 'D',
      },
    ],
  },
  {
    value: 'date',
    name: '등록일',
    type: 'input',
    menus: [],
  },
];

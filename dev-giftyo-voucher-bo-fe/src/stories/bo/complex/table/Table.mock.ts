import { TableColumnType } from 'src/components/ui/table/common/stuff/CommonTableHeader';

export const basicColumns: TableColumnType[] = [
  {
    id: 'id',
    label: 'No',
  },
  {
    id: 'franchiseId',
    label: '프랜차이즈 ID',
  },
  {
    id: 'brandCode',
    label: '브랜드 코드',
  },
  {
    id: 'brandName',
    label: '브랜드명',
  },
  {
    id: 'corporationName',
    label: '사업자명',
  },
  {
    id: 'registerDate',
    label: '등록일',
  },
];

export const sortColumns: TableColumnType[] = [
  {
    id: 'id',
    label: 'No',
    hasFilter: true,
  },
  {
    id: 'franchiseId',
    label: '프랜차이즈 ID',
  },
  {
    id: 'brandCode',
    label: '브랜드 코드',
  },
  {
    id: 'brandName',
    label: '브랜드명',
  },
  {
    id: 'corporationName',
    label: '사업자명',
  },
  {
    id: 'registerDate',
    label: '등록일',
    hasFilter: true,
  },
];

export interface MockDataType {
  id: number;
  franchiseId: number;
  brandCode: number;
  brandName: string;
  corporationName: string;
  registerDate: string;
}

const createMockData = (
  id: number,
  franchiseId: number,
  brandCode: number,
  brandName: string,
  corporationName: string,
  registerDate: string
): MockDataType => {
  return {
    id: id,
    franchiseId: franchiseId,
    brandCode: brandCode,
    brandName: brandName,
    corporationName: corporationName,
    registerDate: registerDate,
  };
};

export const mockRows = [
  createMockData(1, 159, 6, '페리카나', '요기요', '2023-10-23 13:33:33'),
  createMockData(2, 237, 9, '페리카나', '요기요', '2023-10-23 14:33:33'),
  createMockData(3, 262, 16, '페리카나', '요기요', '2023-10-23 15:33:33'),
  createMockData(4, 305, 3, '페리카나', '요기요', '2023-10-23 16:33:33'),
  createMockData(5, 356, 16, '페리카나', '요기요', '2023-10-23 17:33:33'),
  createMockData(6, 159, 6, '페리카나', '요기요', '2023-10-23 18:33:33'),
  createMockData(7, 237, 9, '페리카나', '요기요', '2023-10-23 19:33:33'),
  createMockData(8, 262, 16, '페리카나', '요기요', '2023-10-23 20:33:33'),
  createMockData(9, 305, 3, '페리카나', '요기요', '2023-10-23 21:33:33'),
  createMockData(10, 356, 16, '페리카나', '요기요', '2023-10-23 22:33:33'),
];

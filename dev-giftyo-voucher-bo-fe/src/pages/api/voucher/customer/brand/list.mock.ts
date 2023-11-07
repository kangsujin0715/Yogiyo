import { CustomerBrandVO } from 'src/interface/customer/CustomerBrandVO';

const createData = (
  no: number,
  franchiseId: string,
  brandCode: string,
  brandName: string,
  corporationName: string,
  registerDate: string
): CustomerBrandVO => {
  return {
    no: no,
    franchiseId: franchiseId,
    brandCode: brandCode,
    brandName: brandName,
    corporationName: corporationName,
    registerDate: registerDate,
  };
};

export const brandListMock = [
  createData(1, '1111', '6', '페리카나', '요기요', '2023-10-23 13:33:33'),
  createData(2, '237', '9,', '페리카나', '요기요', '2023-10-23 14:33:33'),
  createData(3, '262', '16', '페리카나', '요기요', '2023-10-23 15:33:33'),
  createData(4, '305', '3', '페리카나', '요기요', '2023-10-23 16:33:33'),
  createData(5, '356', '16', '페리카나', '요기요', '2023-10-23 17:33:33'),
  createData(6, '159', '6', '페리카나', '요기요', '2023-10-23 18:33:33'),
  createData(7, '237', '9', '페리카나', '요기요', '2023-10-23 19:33:33'),
  createData(8, '262', '16', '페리카나', '요기요', '2023-10-23 20:33:33'),
  createData(9, '305', '3', '페리카나', '요기요', '2023-10-23 21:33:33'),
  createData(10, '356', '16', '페리카나', '요기요', '2023-10-23 22:33:33'),
];

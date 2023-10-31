import { TablePagination } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { FormValue } from 'src/components/page-scenes/customer/brand/list/form/FormBox';
import { useRouter } from 'next/router';
import SearchResultBox from 'src/components/ui/table/search/SearchResultBox';
import { SearchTable } from 'src/components/ui/table/search/SearchTable';
import { GroupButton } from 'src/components/ui/button/MultipleButtonGroup';
import { Add, FileDownload } from '@mui/icons-material';

interface BrandDataType {
  id: number;
  franchiseId: number;
  brandCode: number;
  brandName: string;
  corporationName: string;
  registerDate: string;
}

const columns = ['No', '프랜차이즈 ID', '브랜드 코드', '브랜드명', '사업자명', '등록일'];

const createData = (
  id: number,
  franchiseId: number,
  brandCode: number,
  brandName: string,
  corporationName: string,
  registerDate: string
) => {
  return {
    id: id,
    franchiseId: franchiseId,
    brandCode: brandCode,
    brandName: brandName,
    corporationName: corporationName,
    registerDate: registerDate,
  };
};

const rows = [
  createData(1, 159, 6, '페리카나', '요기요', '2023-10-23 13:33:33'),
  createData(2, 237, 9, '페리카나', '요기요', '2023-10-23 13:33:33'),
  createData(3, 262, 16, '페리카나', '요기요', '2023-10-23 13:33:33'),
  createData(4, 305, 3, '페리카나', '요기요', '2023-10-23 13:33:33'),
  createData(5, 356, 16, '페리카나', '요기요', '2023-10-23 13:33:33'),
  createData(6, 159, 6, '페리카나', '요기요', '2023-10-23 13:33:33'),
  createData(7, 237, 9, '페리카나', '요기요', '2023-10-23 13:33:33'),
  createData(8, 262, 16, '페리카나', '요기요', '2023-10-23 13:33:33'),
  createData(9, 305, 3, '페리카나', '요기요', '2023-10-23 13:33:33'),
  createData(10, 356, 16, '페리카나', '요기요', '2023-10-23 13:33:33'),
];

interface TableBoxProps {
  searchValue: FormValue;
}

/**
 * 브랜드 목록 테이블 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.24
 * @author : hijoeng@coopnc.com
 */
const TableBox = (props: TableBoxProps) => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const filterRows = rows.filter((data) => {
    if (Object.values(props.searchValue).every((v) => !v)) return rows;

    return (
      data.franchiseId === parseInt(props.searchValue.franchiseId) ||
      data.brandCode === parseInt(props.searchValue.brandCode) ||
      data.brandName === props.searchValue.brandName ||
      data.corporationName === props.searchValue.corporationName
    );
  });

  const visibleRows = filterRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderRow = (item: BrandDataType, index: number) => {
    return (
      <SearchTable.Row key={item.id}>
        {Object.values(item).map((contents) => (
          <SearchTable.Cell key={`${item.id}_${contents}`}>{contents}</SearchTable.Cell>
        ))}
      </SearchTable.Row>
    );
  };

  const renderPagination = () => {
    return (
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filterRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    );
  };

  return (
    <>
      <SearchResultBox count={filterRows.length}>
        <GroupButton size={'large'} variant={'outlined'} startIcon={<FileDownload />}>
          엑셀 다운로드
        </GroupButton>
        <GroupButton
          type={'submit'}
          size={'large'}
          variant={'contained'}
          startIcon={<Add />}
          onClick={() => router.push('/customer/brand/register')}
        >
          등록
        </GroupButton>
      </SearchResultBox>

      <SearchTable
        data={visibleRows}
        columns={columns}
        renderRow={renderRow}
        renderPagination={renderPagination}
      />
    </>
  );
};

export default TableBox;

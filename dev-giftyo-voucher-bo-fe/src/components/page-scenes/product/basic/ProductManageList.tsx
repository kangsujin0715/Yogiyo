import { TablePagination } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { SearchTable } from 'src/components/ui/table/search/SearchTable';
import { GroupButton } from 'src/components/ui/button/MultipleButtonGroup';
import { FileDownload } from '@mui/icons-material';
import SearchResultBox from 'src/components/ui/table/search/SearchResultBox';
import * as React from 'react';
import { ProductData, ProductSearchResponse } from 'src/interface/product/BasicProduct.interface';

/**
 *
 * @type {{alignItems: string, flex: string, flexDirection: string, display: string, gap: string}}
 */
const columns = [
  'No',
  '기본상품코드',
  '상품명',
  '상품종류',
  '브랜드',
  '권면가액',
  '판매상품수',
  '사용상태',
  '등록일',
];

interface ProductManageTableProps {
  data: ProductSearchResponse;
}

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.11.02
 */
const ProductManageList = (props: ProductManageTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderRow = (item: ProductData) => {
    return (
      <SearchTable.Row key={item.codeNum}>
        {Object.values(item).map((contents) => (
          <SearchTable.Cell key={`${item.codeNum}_${contents}`}>{contents}</SearchTable.Cell>
        ))}
      </SearchTable.Row>
    );
  };

  const renderPagination = () => {
    return (
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={props.data.list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    );
  };

  return (
    <>
      <SearchResultBox count={props.data.list.length}>
        <GroupButton type={'submit'} size={'large'}>
          등록
        </GroupButton>
        <GroupButton size={'large'} variant={'outlined'} startIcon={<FileDownload />}>
          엑셀 다운로드
        </GroupButton>
      </SearchResultBox>

      <SearchTable
        data={props.data.list}
        columns={columns}
        renderRow={renderRow}
        renderPagination={renderPagination}
      />
    </>
  );
};

export default ProductManageList;

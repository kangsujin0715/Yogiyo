import { TablePagination } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { SearchTable } from 'src/components/ui/table/search/SearchTable';
import { GroupButton } from 'src/components/ui/button/MultipleButtonGroup';
import { FileDownload } from '@mui/icons-material';
import SearchResultBox from 'src/components/ui/table/search/SearchResultBox';
import * as React from 'react';
import { CouponData, CouponSearchResponse } from 'src/interface/coupon/CouponManage.interface';

/**
 *
 * @type {{alignItems: string, flex: string, flexDirection: string, display: string, gap: string}}
 */

const columns = [
  'No',
  '발행요청번호',
  '상품권번호',
  '수신자번호',
  '상품명',
  '상품권상태',
  '사용여부',
  '판매채널',
  '신청서구분',
  '신청서명',
  '상품종류',
  '발행일시',
];

interface CouponManageTableProps {
  data: CouponSearchResponse;
}

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.23
 */
const CouponManageList = (props: CouponManageTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderRow = (item: CouponData) => {
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
          일괄 유효기간 연장
        </GroupButton>
        <GroupButton type={'submit'} size={'large'}>
          일괄 발행취소
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

export default CouponManageList;

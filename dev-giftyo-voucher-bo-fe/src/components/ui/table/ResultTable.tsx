import * as React from 'react';
import { Box, Button, Paper, TablePagination, Typography } from '@mui/material';
import styled from 'styled-components';
import { FileDownloadOutlined } from '@mui/icons-material';
import { Pagination, PaginationSearchParams } from 'src/interface/Pagination';
import BasicTable from 'src/components/ui/table/BasicTable';

export interface Column {
  name: string;
  text: string;
}
interface Props<T> {
  columns: Column[];
  data?: T[];
  pagination?: Pagination;
  onPageChange?: (pageParams: PaginationSearchParams) => void;
  excelDownload?: () => void;
}
const ResultTable = <T extends object>({
  columns,
  data,
  pagination,
  onPageChange,
  excelDownload,
}: Props<T>) => {
  const handleChangePage = (size: number, page: number) => onPageChange?.({ size, page });
  return (
    <Box mt="40px">
      <TableCaption>
        {!!pagination && (
          <Typography>
            검색결과 <span className="volume-up">{pagination?.totalElements ?? 0}</span> 건
          </Typography>
        )}
        <Box>
          {excelDownload && (
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              onClick={excelDownload}
              startIcon={<FileDownloadOutlined />}
            >
              엑셀다운로드
            </Button>
          )}
        </Box>
      </TableCaption>
      <Paper sx={{ padding: '24px' }}>
        <BasicTable columns={columns} data={data} />
        {!!pagination && (
          <TablePagination
            component="div"
            count={pagination.totalElements}
            page={pagination.curPage}
            onPageChange={(event, page) => handleChangePage(pagination?.size, page)}
            rowsPerPage={pagination.size}
            onRowsPerPageChange={({ target: { value } }) => handleChangePage(Number(value), 1)}
          />
        )}
      </Paper>
    </Box>
  );
};
export default ResultTable;

const TableCaption = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  & button {
    margin-right: 16px;
  }
  & button:last-child {
    margin-right: 0;
  }
  & p {
    font-size: 14px;
    font-weight: 700;
    & .volume-up {
      color: #2196f3;
    }
  }
`;

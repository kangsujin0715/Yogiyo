import * as React from 'react';
import {
  Box,
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import { FileDownloadOutlined, NavigateBefore, NavigateNext } from '@mui/icons-material';
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
        <Typography>
          검색결과 <span className="volume-up">{pagination?.totalElements ?? 0}</span> 건
        </Typography>
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
          <TableFooter>
            <Box className="table-footer-box">
              <InputLabel id="size">Rows per page</InputLabel>
              <Select
                labelId="size"
                sx={{ height: '24px' }}
                size={'small'}
                name="size"
                label={false}
                value={pagination.size ?? 10}
                onChange={({ target: { value } }) => handleChangePage(Number(value), 1)}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>
            </Box>
            <Box className="table-footer-box">
              <Typography>
                {pagination.start} / {pagination.end} of {pagination.totalElements}
              </Typography>
            </Box>
            <Box className="table-footer-box">
              <IconButton
                role="navigation.before"
                disabled={pagination.first}
                onClick={() => handleChangePage(pagination.size, --pagination.curPage)}
              >
                <NavigateBefore />
              </IconButton>
              <IconButton
                role="navigation.next"
                disabled={pagination.last}
                onClick={() => handleChangePage(pagination.size, ++pagination.curPage)}
              >
                <NavigateNext />
              </IconButton>
            </Box>
          </TableFooter>
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

const TableFooter = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
  height: 44px;
  & .table-footer-box {
    margin-left: 24px;
    &:first-child {
      margin-left: 0;
      display: flex;
      align-items: center;
      & label {
        font-size: 12px;
        margin-right: 8px;
      }
    }
    & p {
      font-size: 12px;
    }
  }
`;

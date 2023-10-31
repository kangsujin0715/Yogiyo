import { ReactNode } from 'react';
import { SearchTableHeader } from 'src/components/ui/table/search/stuff/SearchTableHeader';
import { SearchTableBody } from 'src/components/ui/table/search/stuff/SearchTableBody';
import { SearchTableRow } from 'src/components/ui/table/search/stuff/SearchTableRow';
import { SearchTableCell } from 'src/components/ui/table/search/stuff/SearchTableCell';
import styled from 'styled-components';
import { Box, Table } from '@mui/material';

interface TableProps<T> {
  data: T[];
  columns: string[];
  renderRow: (item: T, index: number) => ReactNode;
  renderPagination?: () => ReactNode;
}

export const SearchTable = <T,>({ columns, data, renderRow, renderPagination }: TableProps<T>) => {
  return (
    <TableBox>
      <Table>
        <SearchTable.Thead columns={columns} />
        <SearchTable.Tbody data={data} renderRow={renderRow} />
      </Table>
      {renderPagination?.()}
    </TableBox>
  );
};

SearchTable.Thead = SearchTableHeader;
SearchTable.Tbody = SearchTableBody;
SearchTable.Row = SearchTableRow;
SearchTable.Cell = SearchTableCell;

const TableBox = styled(Box)`
  margin-top: 16px;
  padding: 24px 24px 0 24px;

  border-radius: var(--borderRadius, 4px);
  border: 1px solid var(--elevation-outlined, #e0e0e0);
  background: var(--background-paper-elevation-0, #fff);
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

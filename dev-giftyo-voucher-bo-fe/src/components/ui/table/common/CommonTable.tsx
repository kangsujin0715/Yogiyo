import React, { ChangeEvent, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import {
  CommonTableHeader,
  TableColumnType,
} from 'src/components/ui/table/common/stuff/CommonTableHeader';
import { CommonTableBody, ContentType } from 'src/components/ui/table/common/stuff/CommonTableBody';
import { CommonTableRow } from 'src/components/ui/table/common/stuff/CommonTableRow';
import { CommonTableCell } from 'src/components/ui/table/common/stuff/CommonTableCell';
import styled from 'styled-components';
import { Paper, Table, TablePagination } from '@mui/material';
import { getComparator, stableSort } from 'src/common/utils/commonUtils';

export type Order = 'asc' | 'desc';

interface TableProps<T> {
  data: T[];
  columns: TableColumnType[];
  hasPagination?: boolean;
  onRowClick?: (items: T) => void;
  onRowSelectChanged?: (items: T[]) => void;
  renderCustomCell?: (key: keyof T, contents: ContentType) => ReactNode;
}

export const CommonTable = <T,>({
  columns,
  data,
  hasPagination = true,
  onRowClick,
  onRowSelectChanged,
  renderCustomCell,
}: TableProps<T>) => {
  const isMounted = useRef(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState('');

  const [selectItems, setSelectItems] = useState<T[]>([]);

  const visibleRows = useMemo(
    () =>
      stableSort(data as never, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ) as T[],
    [order, orderBy, page, rowsPerPage]
  );

  const isItemSelected = (item: T) => selectItems.indexOf(item) !== -1;

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const handleSelectAllItems = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectItems(event.target.checked ? data : []);
  };

  const handleSelectItem = (item: T) => {
    const selectedIndex = selectItems.indexOf(item);
    let newSelected: T[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectItems, item);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectItems.slice(1));
    } else if (selectedIndex === selectItems.length - 1) {
      newSelected = newSelected.concat(selectItems.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectItems.slice(0, selectedIndex),
        selectItems.slice(selectedIndex + 1)
      );
    }
    setSelectItems(newSelected);
  };

  useEffect(() => {
    if (isMounted.current) {
      onRowSelectChanged?.(selectItems);
    }

    isMounted.current = true;
  }, [selectItems]);

  return (
    <TableBox>
      <Table>
        <CommonTable.Thead
          columns={columns}
          order={order}
          orderBy={orderBy}
          hasSelect={!!onRowSelectChanged}
          selectCount={selectItems.length}
          rowCount={data.length}
          onRequestSort={handleRequestSort}
          onSelectAllClick={handleSelectAllItems}
        />
        <CommonTable.Tbody
          data={visibleRows}
          hasSelect={!!onRowSelectChanged}
          isItemSelected={isItemSelected}
          onRowItemClick={onRowClick}
          onSelectItemClick={handleSelectItem}
          renderCustomCell={renderCustomCell}
        />
      </Table>
      {hasPagination && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </TableBox>
  );
};

CommonTable.Thead = CommonTableHeader;
CommonTable.Tbody = CommonTableBody;
CommonTable.Row = CommonTableRow;
CommonTable.Cell = CommonTableCell;

const TableBox = styled(Paper)`
  margin-top: 16px;
  padding: 24px 24px 0 24px;

  border-radius: var(--borderRadius, 4px);
  border: 1px solid var(--elevation-outlined, #e0e0e0);
  background: var(--background-paper-elevation-0, #fff);
`;

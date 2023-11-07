import styled from 'styled-components';
import { Checkbox, TableHead, TableSortLabel } from '@mui/material';
import { CommonTable, Order } from '../CommonTable';
import React from 'react';

export type TableColumnType = {
  id: string;
  label: string;
  hasFilter?: boolean;
};

export interface TableHeaderProps {
  columns: TableColumnType[];
  onRequestSort?: (event: React.MouseEvent<unknown>, property: string) => void;
  order?: Order;
  orderBy?: string;
  hasSelect?: boolean;
  selectCount?: number;
  rowCount?: number;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CommonTableHeader = ({
  columns,
  order,
  orderBy,
  onRequestSort,
  hasSelect,
  selectCount = 0,
  rowCount = 0,
  onSelectAllClick,
}: TableHeaderProps) => {
  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort?.(event, property);
  };

  return (
    <TableHeadBox>
      <CommonTable.Row>
        {hasSelect && (
          <CommonTable.Cell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={selectCount > 0 && selectCount < rowCount}
              checked={rowCount > 0 && selectCount === rowCount}
              onChange={onSelectAllClick}
            />
          </CommonTable.Cell>
        )}
        {columns.map((column) => (
          <CommonTable.Cell key={column.id} data-testid={'table_header_cell'}>
            {column.hasFilter ? (
              <TableSortLabel
                sx={{ fontWeight: 'bold' }}
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : 'asc'}
                onClick={createSortHandler(column.id)}
              >
                {column.label}
              </TableSortLabel>
            ) : (
              <>{column.label}</>
            )}
          </CommonTable.Cell>
        ))}
      </CommonTable.Row>
    </TableHeadBox>
  );
};

const TableHeadBox = styled(TableHead)`
  & .MuiTableCell-head {
    font-weight: bold;
  }
`;

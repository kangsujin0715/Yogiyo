import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import styled from 'styled-components';

type Align = 'center' | 'left' | 'right';
export interface Column {
  name: string;
  text: string;
  ascending?: boolean;
  onSort?: (columns: Column[], ascending: boolean) => void;
  align?: Align;
  dataAlign?: Align;
}
interface Props<T> {
  columns: Column[];
  data?: T[];
  useCheck?: boolean;
  onChange?: (rows: T[]) => void;
}

const BasicTable = <T extends object>({ columns, data, useCheck, onChange }: Props<T>) => {
  const rowData = data?.map((row, i) => ({
    ...row,
    key: `data-row-${i}-${crypto.randomUUID()}`,
  }));

  const [allChecked, setAllChecked] = useState(false);
  const [checkedRowList, setCheckedRowList] = useState<T[]>([]);

  const handleChangeChecked = (checked: boolean, row: T) => {
    setCheckedRowList(
      checked ? [...checkedRowList, row] : checkedRowList.filter((item) => item !== row)
    );
    setAllChecked(checked && checkedRowList.length + 1 === data?.length);
  };

  const handleChangeAllChecked = (checked: boolean, rows: T[]) => {
    setCheckedRowList(checked ? rows : []);
    setAllChecked(checked);
  };

  useEffect(() => {
    useCheck && onChange?.(checkedRowList);
  }, [onChange, checkedRowList, useCheck]);

  return (
    <TableBox>
      <Table>
        <TableHead>
          <TableRow>
            {!!useCheck && (
              <TableCell>
                <Checkbox
                  checked={allChecked}
                  onChange={(_, checked) => handleChangeAllChecked(checked, data ?? [])}
                />
              </TableCell>
            )}
            {columns.map(({ name, text, align, onSort, ascending = false }, i) => (
              <TableCell role={'table.head.th'} variant={'head'} key={name} align={align}>
                {onSort ? (
                  <TableSortLabel
                    active={true}
                    direction={ascending ? 'asc' : 'desc'}
                    onClick={() => {
                      const modified = { ...columns[i], ascending: !ascending };
                      const newCols = columns.map((item) =>
                        item.name === modified.name ? modified : item
                      );
                      onSort(newCols, !ascending);
                    }}
                  >
                    {text}
                  </TableSortLabel>
                ) : (
                  text
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {!data?.length && (
            <TableRow>
              <TableCell
                variant={'body'}
                colSpan={useCheck ? columns.length + 1 : columns.length}
                align="center"
              >
                데이터가 없습니다.
              </TableCell>
            </TableRow>
          )}
          {!!rowData &&
            rowData.map((row, i) => (
              <TableRow key={row.key}>
                {!!useCheck && (
                  <TableCell>
                    <Checkbox
                      checked={checkedRowList.includes(data![i])}
                      onChange={(_, checked) => handleChangeChecked(checked, data![i])}
                    />
                  </TableCell>
                )}
                {columns.map(({ name, dataAlign }) => (
                  <TableCell align={dataAlign} role={'table.body.td'} key={`${row.key}-${name}`}>
                    {Object.getOwnPropertyDescriptor(row, name)?.value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableBox>
  );
};
export default BasicTable;

const TableBox = styled(Box)`
  & thead th {
    font-weight: 700;
    font-size: 14px;
    border-bottom: rgba(0, 0, 0, 0.12) 1px solid;
    & .MuiTableSortLabel-root {
      font-weight: 700;
      font-size: 14px;
    }
  }
  & tbody td {
    white-space: pre;
    font-size: 14px;
    border-bottom: rgba(0, 0, 0, 0.12) 1px solid;
  }
`;

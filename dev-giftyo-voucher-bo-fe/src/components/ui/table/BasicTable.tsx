import * as React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import styled from 'styled-components';

export interface Column {
  name: string;
  text: string;
}
interface Props<T> {
  columns: Column[];
  data?: T[];
}
const BasicTable = <T extends object>({ columns, data }: Props<T>) => {
  return (
    <TableBox>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(({ name, text }) => (
              <TableCell role={'columnheader'} variant={'head'} key={name}>
                {text}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {!data?.length && (
            <TableRow>
              <TableCell variant={'body'} colSpan={columns.length} align={'center'}>
                데이터가 없습니다.
              </TableCell>
            </TableRow>
          )}
          {!!data &&
            data.map((item, i) => (
              <TableRow key={`row-${i}`}>
                {columns.map(({ name }, j) => (
                  <TableCell role={'cell'} key={`${i}-${j}-${name}`}>
                    {
                      // @ts-ignore FIXME: 타입 오류 확인
                      item[name]
                    }
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
  }
  & tbody td {
    white-space: pre;
    font-size: 14px;
    border-bottom: rgba(0, 0, 0, 0.12) 1px solid;
  }
`;

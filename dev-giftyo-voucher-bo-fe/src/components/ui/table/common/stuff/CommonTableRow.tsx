import { TableRow, TableRowProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const CommonTableRow = ({ children, ...props }: PropsWithChildren<TableRowProps>) => {
  return <StyledTableRow {...props}>{children}</StyledTableRow>;
};

const StyledTableRow = styled(TableRow)`
  &:last-child td,
  &:last-child th {
    border: 0;
  }
`;

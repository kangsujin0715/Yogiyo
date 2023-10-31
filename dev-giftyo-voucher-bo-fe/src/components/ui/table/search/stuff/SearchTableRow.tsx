import { TableRow } from '@mui/material';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const SearchTableRow = ({ children }: PropsWithChildren) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};

const StyledTableRow = styled(TableRow)`
  &:last-child td,
  &:last-child th {
    border: 0;
  }
`;

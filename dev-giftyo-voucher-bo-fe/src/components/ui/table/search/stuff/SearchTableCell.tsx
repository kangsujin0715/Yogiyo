import { TableCell } from '@mui/material';
import { PropsWithChildren } from 'react';

export const SearchTableCell = ({ children }: PropsWithChildren) => {
  return <TableCell sx={{ fontSize: 13 }}>{children}</TableCell>;
};

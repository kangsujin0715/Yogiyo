import { TableCell, TableCellProps } from '@mui/material';
import { PropsWithChildren } from 'react';

export const CommonTableCell = ({ children, ...props }: PropsWithChildren<TableCellProps>) => {
  return (
    <TableCell sx={{ fontSize: 13 }} {...props}>
      {children}
    </TableCell>
  );
};

import { TableBody } from '@mui/material';
import { ReactNode } from 'react';

export interface TableBodyProps<T> {
  data: T[];
  renderRow: (item: T, index: number) => ReactNode;
}

export const SearchTableBody = <T extends unknown>({ data, renderRow }: TableBodyProps<T>) => {
  return <TableBody>{data.map(renderRow)}</TableBody>;
};

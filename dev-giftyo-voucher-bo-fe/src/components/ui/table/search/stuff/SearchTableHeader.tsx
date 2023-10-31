import styled from 'styled-components';
import { TableHead } from '@mui/material';
import { SearchTable } from '../SearchTable';

export interface ITableHeader {
  columns: string[];
}

export const SearchTableHeader = ({ columns }: ITableHeader) => {
  return (
    <TableHeadBox>
      <SearchTable.Row>
        {columns.map((column, index) => (
          <SearchTable.Cell key={`${index}_${column}`}>{column}</SearchTable.Cell>
        ))}
      </SearchTable.Row>
    </TableHeadBox>
  );
};

const TableHeadBox = styled(TableHead)`
  & .MuiTableCell-head {
    font-weight: bold;
  }
`;

import React, { ReactNode } from 'react';
import { CommonTable } from 'src/components/ui/table/common/CommonTable';
import { ContentType } from 'src/components/ui/table/common/stuff/CommonTableBody';
import { MockDataType } from 'src/stories/bo/complex/table/Table.mock';
import { TableColumnType } from 'src/components/ui/table/common/stuff/CommonTableHeader';

interface TableProps<T> {
  data: T[];
  columns: TableColumnType[];
  hasPagination?: boolean;
  onRowClick?: (items: T) => void;
  onRowSelectChanged?: (items: T[]) => void;
  renderCustomCell?: (key: keyof T, contents: ContentType) => ReactNode;
}

export const Table = ({
  data,
  columns,
  hasPagination = true,
  onRowClick,
  onRowSelectChanged,
  renderCustomCell,
}: TableProps<MockDataType>) => {
  return (
    <CommonTable
      data={data}
      columns={columns}
      hasPagination={hasPagination}
      onRowClick={onRowClick}
      onRowSelectChanged={onRowSelectChanged}
      renderCustomCell={renderCustomCell}
    />
  );
};

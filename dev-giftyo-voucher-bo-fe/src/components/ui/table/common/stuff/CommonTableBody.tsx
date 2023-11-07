import { Checkbox, TableBody } from '@mui/material';
import { CommonTable } from 'src/components/ui/table/common/CommonTable';
import React, { ReactNode } from 'react';

export type ContentType = string | number;

export interface TableBodyProps<T> {
  data: T[];
  hasSelect?: boolean;
  isItemSelected?: (item: T) => boolean;
  onSelectItemClick?: (item: T) => void;
  onRowItemClick?: (item: T) => void;
  renderCustomCell?: (key: keyof T, contents: ContentType) => ReactNode;
}

export const CommonTableBody = <T,>({
  data,
  hasSelect,
  isItemSelected,
  onSelectItemClick,
  onRowItemClick,
  renderCustomCell,
}: TableBodyProps<T>) => {
  return (
    <TableBody>
      {data.map((item, index) => (
        <CommonTable.Row
          key={`row_${JSON.stringify(item)}`}
          selected={isItemSelected?.(item)}
          sx={{ cursor: `${onSelectItemClick || onRowItemClick ? 'pointer' : ''}` }}
          data-testid={`table_body_row_${index}`}
          onClick={() => {
            hasSelect && onSelectItemClick?.(item);
            onRowItemClick?.(item);
          }}
        >
          {hasSelect && (
            <CommonTable.Cell padding="checkbox">
              <Checkbox color="primary" checked={isItemSelected?.(item)} />
            </CommonTable.Cell>
          )}

          {Object.entries(item as never).map(([key, value]) => {
            return (
              <CommonTable.Cell key={`cell_${key}_${value}`} data-testid={'table_body_cell'}>
                {renderCustomCell ? (
                  renderCustomCell(key as keyof T, value as ContentType)
                ) : (
                  <>{value}</>
                )}
              </CommonTable.Cell>
            );
          })}
        </CommonTable.Row>
      ))}
    </TableBody>
  );
};

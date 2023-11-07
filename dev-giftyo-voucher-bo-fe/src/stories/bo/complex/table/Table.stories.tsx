import type { Meta, StoryObj } from '@storybook/react';
import { Table } from 'src/stories/bo/complex/table/Table';
import { basicColumns, mockRows, sortColumns } from 'src/stories/bo/complex/table/Table.mock';
import { ReactNode } from 'react';
import { Typography } from '@mui/material';

const meta = {
  title: 'yogiyo-bo/complex/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTable: Story = {
  args: {
    data: mockRows,
    columns: basicColumns,
    onRowSelectChanged: undefined,
    onRowClick: () => alert('row clicked'),
  },
};

export const SortTable: Story = {
  args: {
    data: mockRows,
    columns: sortColumns,
    onRowSelectChanged: undefined,
    onRowClick: () => alert('row clicked'),
  },
};

export const SelectTable: Story = {
  args: {
    data: mockRows,
    columns: basicColumns,
    onRowSelectChanged: (items) => alert(JSON.stringify(items)),
  },
};

export const CustomCellTable: Story = {
  args: {
    data: mockRows,
    columns: basicColumns,
    onRowClick: undefined,
    onRowSelectChanged: undefined,
    renderCustomCell: (cell, contents): ReactNode => {
      if (cell === 'franchiseId') {
        return (
          <Typography
            fontSize={'14px'}
            sx={{ color: '#2196F3' }}
            onClick={() => alert('프랜차이즈 클릭')}
          >
            {contents}
          </Typography>
        );
      }

      return <>{contents}</>;
    },
  },
};

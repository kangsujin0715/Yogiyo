import { Meta, StoryFn, StoryObj } from '@storybook/react';
import BasicTable, { Column } from 'src/components/ui/table/BasicTable';
import { useState } from 'react';
import { Button } from '@mui/material';

const meta = {
  title: 'Yogiyo/common/table/BasicTable',
  component: BasicTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BasicTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { no: 6, brandNm: '테스트브랜드5', brandCd: 'A110', useYn: '사용' },
  { no: 5, brandNm: '테스트브랜드4', brandCd: 'A610', useYn: '사용' },
  { no: 4, brandNm: '테스트브랜드3', brandCd: 'A510', useYn: '미사용' },
  { no: 3, brandNm: '테스트브랜드2', brandCd: 'A430', useYn: '사용' },
  { no: 2, brandNm: '테스트브랜드1', brandCd: 'A420', useYn: '사용' },
  { no: 1, brandNm: '테스트브랜드', brandCd: 'A410', useYn: '사용' },
];
const initColumns: Column[] = [
  { text: 'No.', name: 'no' },
  {
    text: '브랜드명',
    name: 'brandNm',
    ascending: false,
  },
  { text: '브랜드코드', name: 'brandCd' },
  { text: '사용여부', name: 'useYn' },
];
export const withData: Story = {
  args: {
    columns: initColumns,
    data: sampleData,
  },
};

export const withoutData: Story = {
  args: {
    columns: initColumns,
  },
};

const sampleSortFunction = (asc: boolean, compare1: string, compare2: string) => {
  if (asc) {
    return compare1 > compare2 ? 1 : -1;
  }
  return compare1 > compare2 ? -1 : 1;
};

export const useSort: StoryFn<typeof BasicTable> = () => {
  const testColumns: Column[] = [
    { text: 'No.', name: 'no' },
    {
      text: '브랜드명',
      name: 'brandNm',
      onSort: (modified: Column[], ascending) => {
        const sorted = data.sort((a, b) => sampleSortFunction(ascending, a.brandNm, b.brandNm));
        setData(sorted);
        setColumns(modified);
      },
      ascending: false,
    },
    { text: '브랜드코드', name: 'brandCd' },
    { text: '사용여부', name: 'useYn' },
  ];
  const [columns, setColumns] = useState(testColumns);
  const [data, setData] = useState(sampleData);
  return <BasicTable columns={columns} data={data} />;
};
export const withCheck: Story = {
  args: {
    columns: initColumns,
    data: sampleData,
    useCheck: true,
    onChange: (args) => {
      console.log(args);
    },
  },
};

export const withButton: Story = {
  args: {
    columns: [...initColumns, { text: '수정', name: 'modifyButton', align: 'center' }],
    data: sampleData.map((row) => ({
      ...row,
      modifyButton: <Button onClick={() => console.log(row)}>수정</Button>,
    })),
  },
};

export const columnAlignRight: Story = {
  args: {
    columns: initColumns.map((col) => ({ ...col, align: 'right' })),
    data: sampleData,
  },
};

export const columnAlignCenter: Story = {
  args: {
    columns: initColumns.map((col) => ({ ...col, align: 'center' })),
    data: sampleData,
  },
};

export const dataAlignRight: Story = {
  args: {
    columns: initColumns.map((col) => ({ ...col, dataAlign: 'right' })),
    data: sampleData,
  },
};

export const dataAlignCenter: Story = {
  args: {
    columns: initColumns.map((col) => ({ ...col, dataAlign: 'center' })),
    data: sampleData,
  },
};

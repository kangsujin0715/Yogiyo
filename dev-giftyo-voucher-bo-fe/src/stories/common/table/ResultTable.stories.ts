import { Meta, StoryObj } from '@storybook/react';
import ResultTable from 'src/components/ui/table/ResultTable';

const meta = {
  title: 'Yogiyo/common/table/ResultTable',
  component: ResultTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResultTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProps = {
  columns: [
    { text: 'No.', name: 'no' },
    { text: '브랜드명', name: 'brandNm' },
    { text: '브랜드코드', name: 'brandCd' },
    { text: '사용여부', name: 'useYn' },
  ],
  data: [
    { no: 1, brandNm: '테스트브랜드', brandCd: 'A410', useYn: '사용' },
    { no: 2, brandNm: '테스트브랜드1', brandCd: 'A420', useYn: '사용' },
    { no: 3, brandNm: '테스트브랜드2', brandCd: 'A430', useYn: '사용' },
    { no: 4, brandNm: '테스트브랜드3', brandCd: 'A510', useYn: '미사용' },
    { no: 5, brandNm: '테스트브랜드4', brandCd: 'A610', useYn: '사용' },
    { no: 6, brandNm: '테스트브랜드5', brandCd: 'A110', useYn: '사용' },
  ],
  pagination: {
    last: false,
    first: false,
    totalElements: 40,
    start: 21,
    end: 30,
    size: 10,
    curPage: 2,
  },
};
export const withData: Story = {
  args: {
    columns: sampleProps.columns,
    data: sampleProps.data,
  },
};

export const withoutData: Story = {
  args: {
    columns: sampleProps.columns,
  },
};

export const withPagination: Story = {
  args: {
    columns: sampleProps.columns,
    data: sampleProps.data,
    pagination: sampleProps.pagination,
  },
};

export const withExcelDownload: Story = {
  args: {
    columns: sampleProps.columns,
    data: sampleProps.data,
    pagination: sampleProps.pagination,
    excelDownload: () => {},
  },
};

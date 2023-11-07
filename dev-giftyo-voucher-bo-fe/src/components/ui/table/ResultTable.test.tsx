import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import ResultTable from 'src/components/ui/table/ResultTable';

const columns = [
  { name: 'test1', text: 'test column1' },
  { name: 'test2', text: 'test column2' },
  { name: 'test3', text: 'test column3' },
  { name: 'test4', text: 'test column4' },
  { name: 'test5', text: 'test column5' },
];

const data = [
  {
    test1: '1 test1',
    test2: '1 test2',
    test3: '1 test3',
    test4: '1 test4',
    test5: '1 test5',
  },
  {
    test1: '2 test1',
    test2: '2 test2',
    test3: '2 test3',
    test4: '2 test4',
    test5: '2 test5',
  },
  {
    test1: '3 test1',
    test2: '3 test2',
    test3: '3 test3',
    test4: '3 test4',
    test5: '3 test5',
  },
  {
    test1: '4 test1',
    test2: '4 test2',
    test3: '4 test3',
    test4: '4 test4',
    test5: '4 test5',
  },
];

const pagination = {
  last: false,
  first: false,
  totalElements: 40,
  start: 21,
  end: 30,
  size: 10,
  curPage: 2,
};

const mockFn = jest.fn();
describe('ResultTable', () => {
  beforeEach(() => {
    render(
      <ResultTable columns={columns} data={data} pagination={pagination} onPageChange={mockFn} />
    );
  });

  test('데이터가 없다면 데이터가 없다는 메세지를 노출 해야 한다.', () => {
    render(<ResultTable columns={columns} data={[]} />);
    const el = screen.getByText('데이터가 없습니다.');
    expect(el).toBeInTheDocument();
  });

  test('입력받은 컬럼만큼 화면에 노출 되어야 한다.', () => {
    const tableHeader = screen.getAllByRole('columnheader');
    expect(tableHeader.length).toEqual(columns.length);
  });

  test('입력받은 데이터를 화면에 노출 해야한다.', () => {
    const dataCell = screen.getAllByRole('table.body.td');
    expect(dataCell.length).toEqual(columns.length * data.length);
  });

  test('페이징 객체가 입력되면 페이징이 노출되어야 한다.', () => {
    const { start, end, totalElements } = pagination;
    const pageInfoEl = screen.getByText(`${start}–${end} of ${totalElements}`);
    expect(pageInfoEl).toBeInTheDocument();
  });

  test('다음 페이지 버튼 클릭 시 페이지 변경함수를 다음 페이지 번호와 함께 를 호출해야한다.', () => {
    screen.getByTitle('Go to previous page').click();
    waitFor(() => expect(mockFn).toBeCalledWith({ size: 10, page: 3 }));
  });

  test('이전 페이지 버튼 클릭 시 페이지 변경함수를 이전 페이지 번호와 함께 를 호출해야한다.', () => {
    screen.getByTitle('Go to next page').click();
    waitFor(() => expect(mockFn).toBeCalledWith({ size: 10, page: 1 }));
  });
});

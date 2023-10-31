import SearchFilterButtonGroup from 'src/components/ui/filter/SearchFilterButtonGroup';
import { fireEvent, render, screen } from '@testing-library/react';

describe('SearchFilterButtonGroup', () => {
  test('랜더 시 검색 버튼이 노출 되어야한다.', () => {
    render(<SearchFilterButtonGroup onSearch={() => {}} />);
    expect(screen.getByText('검색')).toBeInTheDocument();
  });

  test('검색 버튼 클릭시 해당 onSearch 함수가 실행되어야한다.', () => {
    const mockFn = jest.fn();
    render(<SearchFilterButtonGroup onSearch={mockFn} />);
    fireEvent.click(screen.getByText('검색'));
    expect(mockFn).toBeCalled();
  });

  test('onReset 함수 입력시 초기화 버튼이 노출되어야한다.', () => {
    render(<SearchFilterButtonGroup onSearch={() => {}} onReset={() => {}} />);
    expect(screen.getByText('초기화')).toBeInTheDocument();
  });
  test('초기화 버튼 클릭시 해당 onReset 함수가 실행되어야한다.', () => {
    const mockFn = jest.fn();
    render(<SearchFilterButtonGroup onSearch={() => {}} onReset={mockFn} />);
    fireEvent.click(screen.getByText('초기화'));
    expect(mockFn).toBeCalled();
  });
});

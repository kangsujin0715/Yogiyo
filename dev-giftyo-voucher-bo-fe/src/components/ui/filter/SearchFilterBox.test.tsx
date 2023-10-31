import { fireEvent, render, screen } from '@testing-library/react';
import SearchFilterBox from 'src/components/ui/filter/SearchFilterBox';

describe('SearchFilterBox', () => {
  const resetFn = jest.fn();
  const searchFn = jest.fn();
  beforeEach(() => {
    render(
      <SearchFilterBox onSearch={searchFn} onReset={resetFn}>
        <label htmlFor="test">검색필터</label>
        <input id="test" />
      </SearchFilterBox>
    );
  });
  test('랜더시 검색 버튼이 노출되어야한다.', () => {
    expect(screen.getByText('검색')).toBeInTheDocument();
  });

  test('검색 버튼 클릭시 해당 onSearch 함수가 실행되어야한다.', () => {
    fireEvent.click(screen.getByText('검색'));
    expect(searchFn).toBeCalled();
  });

  test('초기화 함수 입력시 초기화 버튼이 노출되어야한다.', () => {
    expect(screen.getByText('초기화')).toBeInTheDocument();
  });

  test('초기화 버튼 클릭시 해당 onRest 함수가 실행되어야한다.', () => {
    fireEvent.click(screen.getByText('초기화'));
    expect(resetFn).toBeCalled();
  });

  test('자식 컴포넌트 입력시 해당 자식 컴포넌트가 노출되어야한다.', () => {
    expect(screen.getByText('검색필터')).toBeInTheDocument();
  });
});

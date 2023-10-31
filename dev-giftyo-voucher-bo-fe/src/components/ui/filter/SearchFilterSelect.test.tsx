import { render, screen } from '@testing-library/react';
import SearchFilterSelect from 'src/components/ui/filter/SearchFilterSelect';
import { MenuItem } from '@mui/material';

describe('SearchFilterSelect', () => {
  test('라벨과 함께 랜더 되어야 한다.', async () => {
    render(
      <SearchFilterSelect value={1} name="test" label="테스트 셀렉트">
        <MenuItem value={1}>test1</MenuItem>
        <MenuItem value={2}>test2</MenuItem>
        <MenuItem value={3}>test3</MenuItem>
      </SearchFilterSelect>
    );
    expect(screen.getByLabelText('테스트 셀렉트')).toBeInTheDocument();
  });

  test('value 로 입력한 값이 선택 되어야 한다.', () => {
    render(
      <SearchFilterSelect value={1} name="test" label="테스트 셀렉트">
        <MenuItem value={1}>test1</MenuItem>
        <MenuItem value={2}>test2</MenuItem>
        <MenuItem value={3}>test3</MenuItem>
      </SearchFilterSelect>
    );
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
  });

  test('startWith 옵션 요소 추가 시 해당 요소가 존재 해야 한다.', () => {
    render(
      <SearchFilterSelect
        value="A"
        name="test"
        label="테스트 셀렉트"
        startWith={<MenuItem value="A">전체</MenuItem>}
      ></SearchFilterSelect>
    );
    expect(screen.getByText('전체')).toBeInTheDocument();
  });
});

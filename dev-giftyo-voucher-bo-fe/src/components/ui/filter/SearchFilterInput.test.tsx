import { fireEvent, render, screen } from '@testing-library/react';
import SearchFilterInput from 'src/components/ui/filter/SearchFilterInput';

describe('SearchFilterInput', () => {
  const testLabelText = '테스트';
  const testValue = 'test value';
  const testInputName = 'test';
  const onChange = jest.fn();
  beforeEach(() => {
    render(
      <SearchFilterInput
        label={testLabelText}
        value={testValue}
        name={testInputName}
        onChange={onChange}
      />
    );
  });

  test('라벨과 함께 랜더 되어야한다.', () => {
    expect(screen.getByLabelText(testLabelText)).toBeInTheDocument();
  });

  test('value 를 입력시 화면에 표기되어야한다.', () => {
    expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
  });

  test('변경시 onChange 함수를 호출 해야 한다.', () => {
    const updateValue = 'update!';
    fireEvent.change(screen.getByLabelText(testLabelText), {
      target: { value: updateValue },
    });
    expect(onChange).toBeCalled();
  });
});

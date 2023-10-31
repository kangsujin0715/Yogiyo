import LargeCheckBox from 'src/components/ui/checkbox/LargeCheckbox';
import { fireEvent, render, screen } from '@testing-library/react';

describe('LargeCheckbox', () => {
  const sampleProps = {
    label: 'for test',
    onChanged: jest.fn(),
    isChecked: false,
  };
  beforeEach(() => {
    //given
    render(<LargeCheckBox {...sampleProps} />);
  });

  test('체크박스가 입력한 라벨로 정상 노출 되야한다.', () => {
    const el = screen.getByLabelText(sampleProps.label);
    //then
    expect(el).toBeInTheDocument();
  });

  test('체크박스 클릭시 onChange 함수가 호출 되어야 한다.', () => {
    const el = screen.getByLabelText(sampleProps.label);
    //when
    fireEvent.click(el);
    //then
    expect(sampleProps.onChanged).toBeCalledWith(true);
  });
});

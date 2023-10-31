import { render, screen } from '@testing-library/react';
import FormRadioElement from 'src/components/ui/form/elements/FormRadioElement';

describe('FormRadioElement', () => {
  beforeEach(() => {
    const options = [
      { name: '선택지1', value: 1 },
      { name: '선택지2', value: 2 },
    ];
    render(<FormRadioElement options={options} />);
  });

  test('입력받은 옵션값이 화면에 출력되어야 한다.', () => {
    expect(screen.getByText('선택지1')).toBeInTheDocument();
    expect(screen.getByText('선택지2')).toBeInTheDocument();
  });
});

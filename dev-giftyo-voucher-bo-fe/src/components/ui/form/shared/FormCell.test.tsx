import { render, screen } from '@testing-library/react';
import FormCell from 'src/components/ui/form/shared/FormCell';

describe('FormCell', () => {
  test('입력한 라벨과 자식 컴포넌트가 화면에 표기되어야 한다.', () => {
    const testLabel = '테스트 셀';
    render(
      <FormCell label={testLabel} htmlFor="test">
        <input name="test" id="test" />
      </FormCell>
    );
    expect(screen.getByText(testLabel)).toBeInTheDocument();
  });

  test('required 옵션이 있는경우 라벨에 [*] 표기가 출력 되어야한다.', () => {
    render(
      <FormCell label={'테스트 셀'} htmlFor="test" required>
        <input name="test" id="test" />
      </FormCell>
    );
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});

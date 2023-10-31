import { fireEvent, render, screen } from '@testing-library/react';
import FormArticle from 'src/components/ui/form/FormArticle';

describe('FormArticle', () => {
  const mockFn = jest.fn();
  const testTitle = '테스트제목';
  beforeEach(() => {
    render(
      <FormArticle title={testTitle} unMask={mockFn}>
        <div>test</div>
      </FormArticle>
    );
  });
  test('입력한 타이틀이 화면에 표기되어야 한다.', () => {
    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });

  test('마스킹 해제 함수 입력시 마스킹해제 버튼이 출력되어야한다.', () => {
    expect(screen.getByText('마스킹해제')).toBeInTheDocument();
  });

  test('마스킹해제 버튼 클릭시 unMask 함수가 실행 되어야한다', () => {
    fireEvent.click(screen.getByText('마스킹해제'));
    expect(mockFn).toBeCalled();
  });
});

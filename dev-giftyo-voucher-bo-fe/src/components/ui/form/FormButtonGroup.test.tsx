import { fireEvent, render, screen } from '@testing-library/react';
import FormButtonGroup from 'src/components/ui/form/FormButtonGroup';

describe('FormButtonGroup', () => {
  test('onSubmit 함수를 입력해 랜더시 저장 버튼이 노출 되어야 한다.', () => {
    render(<FormButtonGroup onSubmit={() => {}} />);
    expect(screen.getByText('저장')).toBeInTheDocument();
  });

  test('onCancel 함수를 입력해 랜더시 취소 버튼이 노출 되어야 한다.', () => {
    render(<FormButtonGroup onCancel={() => {}} />);
    expect(screen.getByText('취소')).toBeInTheDocument();
  });

  test('onDelete 함수를 입력해 랜더시 삭제 버튼이 노출 되어야 한다.', () => {
    render(<FormButtonGroup onDelete={() => {}} />);
    expect(screen.getByText('삭제')).toBeInTheDocument();
  });

  test('submitButtonText 를 입력시 해당 문자로 버튼이 노출되어야 한다.', () => {
    render(<FormButtonGroup onSubmit={() => {}} submitButtonText="제출" />);
    expect(screen.getByText('제출')).toBeInTheDocument();
  });

  test('cancelButtonText 를 입력시 해당 문자로 버튼이 노출되어야 한다.', () => {
    render(<FormButtonGroup onCancel={() => {}} cancelButtonText="돌아가기" />);
    expect(screen.getByText('돌아가기')).toBeInTheDocument();
  });

  test('deleteButtonText 를 입력시 해당 문자로 버튼이 노출되어야 한다.', () => {
    render(<FormButtonGroup onDelete={() => {}} deleteButtonText="제거" />);
    expect(screen.getByText('제거')).toBeInTheDocument();
  });

  test('버튼 클릭시 해당하는 함수가 실행되어야 한다.', () => {
    const submitFn = jest.fn();
    const cancelFn = jest.fn();
    const deleteFn = jest.fn();

    render(<FormButtonGroup onSubmit={submitFn} onCancel={cancelFn} onDelete={deleteFn} />);

    fireEvent.click(screen.getByText('저장'));
    expect(submitFn).toBeCalled();

    fireEvent.click(screen.getByText('취소'));
    expect(cancelFn).toBeCalled();

    fireEvent.click(screen.getByText('삭제'));
    expect(deleteFn).toBeCalled();
  });
});

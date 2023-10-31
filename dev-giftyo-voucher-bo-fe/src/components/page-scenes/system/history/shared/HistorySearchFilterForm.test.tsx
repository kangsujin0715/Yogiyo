import { fireEvent, render, screen } from '@testing-library/react';
import * as ReactQuery from 'react-query';
import { ReactNode } from 'react';
import * as Recoil from 'recoil';
import HistorySearchFilterForm from 'src/components/page-scenes/system/history/shared/HistorySearchFilterForm';

const createWrapper = () => {
  const queryClient = new ReactQuery.QueryClient();
  //FIXME: 오류 확인 Component definition is missing display name(react/display-name)
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: ReactNode }) => (
    <Recoil.RecoilRoot>
      <ReactQuery.QueryClientProvider client={queryClient}>
        {children}
      </ReactQuery.QueryClientProvider>
    </Recoil.RecoilRoot>
  );
};

describe('HistorySearchFilterForm', () => {
  test('기본 필터로 ID,이름,IP 를 노출 해야 한다.', () => {
    render(<HistorySearchFilterForm onSearch={() => {}} target={'read'} />, {
      wrapper: createWrapper(),
    });

    expect(screen.getByLabelText('ID')).toBeInTheDocument();
    expect(screen.getByLabelText('이름')).toBeInTheDocument();
    expect(screen.getByLabelText('IP')).toBeInTheDocument();
  });

  test('수정 유형이 true 라면 수정 유형 요소가 노출되어야 한다.', () => {
    render(<HistorySearchFilterForm modType onSearch={() => {}} target={'read'} />, {
      wrapper: createWrapper(),
    });
    expect(screen.getByLabelText('유형')).toBeInTheDocument();
  });

  test('메뉴 필터 요소가 입력되면 해당 요소를 노출해야 한다.', () => {
    render(
      <HistorySearchFilterForm
        modType
        menuFilter={
          <label>
            추가요소
            <input />
          </label>
        }
        onSearch={() => {}}
        target={'read'}
      />,
      {
        wrapper: createWrapper(),
      }
    );
    expect(screen.getByLabelText('추가요소')).toBeInTheDocument();
  });

  test('검색버튼 클릭 시 onSearch 함수가 실행 되어야한다.', () => {
    const mockFn = jest.fn();
    render(<HistorySearchFilterForm onSearch={mockFn} target={'read'} />, {
      wrapper: createWrapper(),
    });
    fireEvent.click(screen.getByText('검색'));
    expect(mockFn).toBeCalled();
  });
});

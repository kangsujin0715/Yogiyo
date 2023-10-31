import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import MenuSearchFilter from 'src/components/page-scenes/system/history/shared/MenuSearchFilter';
import * as ReactQuery from 'react-query';
import * as Recoil from 'recoil';
import { ReactNode } from 'react';

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
createWrapper.displayName = 'createWrapper';

describe('MenuSearchFilter', () => {
  const target = 'read';
  const mockAtom = {
    key: `${target}-history-filter-atom`,
    default: { menu: { first: 'A', second: 'A', third: 'A' } },
  };
  const mockUseRecoilState = jest.fn();
  const mockUseQueryState = jest.fn();
  const setStatusMockFn = jest.fn();
  beforeEach(async () => {
    mockUseRecoilState.mockReturnValue([mockAtom.default, setStatusMockFn]);
    jest.spyOn(Recoil, 'useRecoilState').mockImplementation(mockUseRecoilState);

    mockUseQueryState.mockReturnValue({
      data: [
        { code: 'M02', name: '상품관리' },
        { code: 'M0201', name: '기본상품' },
      ],
      status: 'success',
    });
    jest.spyOn(ReactQuery, 'useQuery').mockImplementation(mockUseQueryState);

    await act(
      async () =>
        await render(<MenuSearchFilter target={target} />, {
          wrapper: createWrapper(),
        })
    );
  });

  afterEach(() => {
    jest.spyOn(Recoil, 'useRecoilState').mockRestore();
    jest.spyOn(ReactQuery, 'useQuery').mockRestore();
  });

  test('컴포넌트 랜더시 3개의 메뉴 선택 요소가 생성되어야 한다.', () => {
    const firstEl = screen.getByLabelText('1Depth');
    expect(firstEl).toBeInTheDocument();

    const secondEl = screen.getByLabelText('2Depth');
    expect(secondEl).toBeInTheDocument();

    const thirdEl = screen.getByLabelText('3Depth');
    expect(thirdEl).toBeInTheDocument();
  });

  test('1Depth 메뉴 변경시 2,3Depth 메뉴 상태가 초기화 되어야한다.', async () => {
    const firstSelect = screen.getByTestId('first');
    const changeValue = 'M02';
    fireEvent.change(firstSelect, { target: { value: changeValue } });

    const expectResult = {
      menu: { first: changeValue, second: 'A', third: 'A' },
    };

    await waitFor(async () => {
      expect(setStatusMockFn).toBeCalledWith(expectResult);
    });
  });

  test('2Depth 메뉴 변경시 3Depth 메뉴 상태가 초기화 되어야한다.', async () => {
    const secondSelect = screen.getByTestId('second');
    const changeValue = 'M0201';
    fireEvent.change(secondSelect, { target: { value: changeValue } });

    const expectResult = {
      menu: { first: 'A', second: changeValue, third: 'A' },
    };

    await waitFor(async () => {
      expect(setStatusMockFn).toBeCalledWith(expectResult);
    });
  });
});

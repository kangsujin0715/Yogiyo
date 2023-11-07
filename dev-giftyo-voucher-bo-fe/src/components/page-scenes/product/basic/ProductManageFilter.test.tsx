import { act, render, screen } from '@testing-library/react';

import * as ReactQuery from 'react-query';
import * as Recoil from 'recoil';
import { ReactNode } from 'react';
import ProductManageFilter from 'src/components/page-scenes/product/basic/ProductManageFilter';

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

describe('상품관리 검색 필터', () => {
  const mockSearch = jest.fn();
  const mockReset = jest.fn();
  beforeEach(async () => {
    await act(
      async () =>
        await render(<ProductManageFilter onReset={mockReset} onSearch={mockSearch} />, {
          wrapper: createWrapper(),
        })
    );
  });

  test('메뉴 선텍 요소 랜더링 확인', () => {
    const firstEl = screen.getByLabelText('기본상품코드');
    expect(firstEl).toBeInTheDocument();

    const secondEl = screen.getByLabelText('상품명');
    expect(secondEl).toBeInTheDocument();

    const thirdEl = screen.getByLabelText('상품종류');
    expect(thirdEl).toBeInTheDocument();
  });
});

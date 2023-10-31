import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen, waitFor } from '@testing-library/react';
import CouponListScenes from 'src/components/page-scenes/coupon/coupon-list/CouponList.scenes';

const targetModule = 'src/query/coupon/useCoupon';

describe('CouponListScenes', () => {
  const mockMutate = jest.fn();
  beforeEach(() => {
    // hook Mocking
    jest.mock(targetModule, () => {
      return {
        ...jest.requireActual(targetModule),
        useCouponList: jest.fn(() => true),
        useCouponAddCart: () => ({ mutate: mockMutate }),
      };
    });

    render(
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                retry: false,
                refetchOnWindowFocus: false,
                useErrorBoundary: true,
                suspense: true,
              },
            },
          })
        }>
        <CouponListScenes />
      </QueryClientProvider>,
    );
  });

  test('타이틀이 정상 노출 되어야 한다.', () => {
    waitFor(() => {
      const el = screen.getByText('CouponList Page');
      //then
      expect(el).toBeInTheDocument();
    });
  });

  test('useCouponList hook 이 정상 호출 되어야 한다.', () => {
    //mock
    const targetHook = require(targetModule).useCouponList;
    waitFor(() => {
      //hook 이 호출 되었는가 확인
      expect(targetHook).toBeCalled();
    });
  });

  test('useCouponAddCart hook 이 정상 호출 되어야한다.', () => {
    waitFor(() => {
      console.log('Test@@@', screen.getByText('Add cart'));
      //when
      screen.getByText('Add cart').click();
      //then
      expect(mockMutate).toBeCalled();
    });
  });
});

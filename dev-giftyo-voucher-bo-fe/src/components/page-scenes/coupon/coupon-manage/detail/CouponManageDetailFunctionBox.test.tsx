import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import CouponManageDetailFunctionBox from 'src/components/page-scenes/coupon/coupon-manage/detail/CouponManageDetailFunctionBox';

describe('쿠폰 상세 기능 버튼', () => {
  test('버튼 텍스트 확인, 및 클릭', () => {
    const { getByText } = render(<CouponManageDetailFunctionBox />);

    expect(getByText('발행취소 후 재발송')).toBeInTheDocument();
    expect(getByText('발행취소 후 재발행')).toBeInTheDocument();
    expect(getByText('발행취소')).toBeInTheDocument();
    expect(getByText('수신자번호 변경 후 재발송')).toBeInTheDocument();
    expect(getByText('재발송')).toBeInTheDocument();
    expect(getByText('유효기간연장')).toBeInTheDocument();
  });

  test('셀렉터 버튼 클릭 확인.', async () => {
    const component = render(<CouponManageDetailFunctionBox />);
    const button = component.container.querySelector('#selecter') as HTMLElement;

    const menu = component.container.querySelector('#menu');
    //메뉴 비노출 상태
    expect(menu).toBeNull();

    //버튼 클릭
    fireEvent.click(button);

    await waitFor(() => {
      const menuItem = screen.getByRole('menu');
      //메뉴 노출 상태
      expect(menuItem).toBeInTheDocument();
    });
  });
});

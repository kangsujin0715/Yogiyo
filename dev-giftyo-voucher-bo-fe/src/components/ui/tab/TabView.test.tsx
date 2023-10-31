import TabView, { TabColumns } from 'src/components/ui/tab/TabView';
import * as React from 'react';
import { ReactNode } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

const recoilWrapper = (children: ReactNode) => (
  <RecoilRoot>{children}</RecoilRoot>
);
const tabList: TabColumns[] = [
  { text: 'test1', panel: <p>panel text1</p> },
  { text: 'test2', panel: <p>panel text2</p> },
  { text: 'test3', panel: <p>panel text3</p> },
  { text: 'test4', panel: <p>panel text4</p> },
];
describe('TabView', () => {
  beforeEach(() => {
    render(
      recoilWrapper(
        <TabView tabs={tabList}>
          <div>Test Children components</div>
        </TabView>,
      ),
    );
  });

  test('입력한 만큼의 탭이 생성되어야 한다.', async () => {
    const tabs = await screen.findAllByRole('tab');
    expect(tabs.length).toEqual(tabList.length);
  });

  test('클릭한 탭의 패널이 노출되어야 한다.', async () => {
    fireEvent.click(screen.getByText('test1'));
    await waitFor(() => {
      const test1Panel = screen.getByText('panel text1');
      expect(test1Panel).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('test2'));
    await waitFor(() => {
      const test2Panel = screen.getByText('panel text2');
      expect(test2Panel).toBeInTheDocument();
    });
  });

  test('자식컴포넌트가 있다면 자식컴포넌트가 노출 되어야 한다.', () => {
    const children = screen.getByText('Test Children components');
    expect(children).toBeInTheDocument();
  });
});

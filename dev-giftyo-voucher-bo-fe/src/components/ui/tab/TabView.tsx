import * as React from 'react';
import { ReactNode } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { atom, useRecoilState } from 'recoil';

export interface TabColumns {
  text: string;
  panel: ReactNode;
}
interface Props {
  tabs: TabColumns[];
  children?: ReactNode;
}

const activeTabId = atom({
  key: 'active-tab-id',
  default: 0,
});
const TabView = ({ tabs, children }: Props) => {
  const [activeId, setActiveId] = useRecoilState(activeTabId);
  const activePanel = tabs[activeId].panel;
  return (
    <Box>
      <Box py={'24px'}>
        <Tabs
          sx={{
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            minHeight: '42px',
            height: '42px',
          }}
          aria-roledescription="tab-box"
          value={activeId}
          onChange={(event, value) => setActiveId(value)}
        >
          {tabs.map(({ text }) => (
            <Tab
              sx={{ fontSize: '14px', fontWeight: 700, height: '42px', padding: '9px 16px' }}
              role="tab"
              key={text}
              label={text}
            />
          ))}
        </Tabs>
      </Box>
      {!!children && children}
      {activePanel ?? <p>Wrong activeId</p>}
    </Box>
  );
};
export default TabView;

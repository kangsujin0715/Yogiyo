import * as React from 'react';
import { ReactNode } from 'react';
import { Grid, Paper } from '@mui/material';
import styled from 'styled-components';
import SearchFilterButtonGroup from 'src/components/ui/filter/SearchFilterButtonGroup';

interface Props {
  children: ReactNode;
  onReset?: () => void;
  onSearch: () => void;
}

/**
 * 검색 필터 박스 컴포넌트
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | undefined | null} children
 * @param {() => void} onSearch
 * @param {(() => void) | undefined} onReset
 * @returns {React.JSX.Element}
 * @since 2023.10.26
 * @author yhju@coopnc.com
 */
const SearchFilterBox = ({ children, onSearch, onReset }: Props) => {
  return (
    <Paper sx={{ padding: '24px' }}>
      <StyledBox spacing={4} container>
        {children}
      </StyledBox>
      <SearchFilterButtonGroup onSearch={onSearch} onReset={onReset} />
    </Paper>
  );
};
export default SearchFilterBox;
const StyledBox = styled(Grid)``;

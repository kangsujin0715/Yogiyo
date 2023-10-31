import * as React from 'react';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';

interface Props {
  onReset?: () => void;
  onSearch: () => void;
}

/**
 * 필터 버튼 그룹 컴포넌트
 * @param {(() => void) | undefined} onReset
 * @param {() => void} onSearch
 * @returns {React.JSX.Element}
 * @since 2023.10.26
 * @author yhju@coopnc.com
 */
const SearchFilterButtonGroup = ({ onReset, onSearch }: Props) => {
  return (
    <ButtonGroupBox>
      {onReset && (
        <Button variant="outlined" size="large" onClick={onReset}>
          초기화
        </Button>
      )}
      <Button variant="contained" size="large" onClick={onSearch}>
        검색
      </Button>
    </ButtonGroupBox>
  );
};
export default SearchFilterButtonGroup;
const ButtonGroupBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  & button:first-child {
    margin-right: 16px;
  }
`;

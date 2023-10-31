import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import MultipleButtonGroup from 'src/components/ui/button/MultipleButtonGroup';
import { PropsWithChildren } from 'react';

interface SearchBoxProps {
  count: number;
}

const SearchResultBox = ({ children, count }: PropsWithChildren<SearchBoxProps>) => {
  return (
    <SearchResultContainer>
      <Typography fontSize={'14px'} fontWeight={700}>
        검색결과
        <i>{count}</i>건
      </Typography>

      <MultipleButtonGroup direction={'row'} spacing={2}>
        {children}
      </MultipleButtonGroup>
    </SearchResultContainer>
  );
};

export default SearchResultBox;

const SearchResultContainer = styled(Box)`
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: space-between;

  i {
    margin-left: 5px;
    color: #2196f3;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
  }
`;

import * as React from 'react';
import { ReactNode } from 'react';
import { Box, Button, Divider } from '@mui/material';
import styled from 'styled-components';
import { RemoveRedEye } from '@mui/icons-material';

interface Props {
  title: string;
  children: ReactNode;
  unMask?: () => void;
}
const FormArticle = ({ title, unMask, children }: Props) => {
  return (
    <StyledFormArticle>
      <Box display="flex" justifyContent="space-between" border="1px soild" pb="17px">
        <h2>{title}</h2>
        {!!unMask && (
          <Button
            onClick={unMask}
            sx={{ fontSize: '1.3rem' }}
            color="success"
            startIcon={<RemoveRedEye />}
          >
            마스킹해제
          </Button>
        )}
      </Box>
      <Divider />
      {children}
    </StyledFormArticle>
  );
};
export default FormArticle;
const StyledFormArticle = styled(Box)`
  & h2 {
    font-weight: 700;
    font-size: 20px;
  }
  & + & {
    margin-top: 40px;
  }
`;

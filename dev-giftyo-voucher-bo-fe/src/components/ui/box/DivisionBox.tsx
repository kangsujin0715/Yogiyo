import * as React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Box, Paper, Typography } from '@mui/material';

interface Props {
  title: string;
  children: ReactNode;
  flex?: number;
}
const DivisionBox = ({ title, children, flex }: Props) => {
  return (
    <StyledDivisionBox flex={flex}>
      <Box className="title-box">
        <Typography>{title}</Typography>
      </Box>
      <Box className="division-content">{children}</Box>
    </StyledDivisionBox>
  );
};
export default DivisionBox;

const StyledDivisionBox = styled(Paper)<{ flex?: number }>`
  flex: ${(props) => props.flex ?? 1};
  border: 1px solid rgba(0, 0, 0, 0.12);
  & + & {
    margin-left: 16px;
  }
  .title-box {
    background-color: rgba(238, 238, 238, 1);
    font-size: 14px;
    height: 40px;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
    padding: 9px 24px;
    & p {
      font-weight: 500;
      font-size: 14px;
      align-items: center;
    }
  }
  & .division-content {
    padding: 24px;
  }
`;

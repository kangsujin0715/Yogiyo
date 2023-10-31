import { PropsWithChildren } from 'react';
import { Box, Button, ButtonProps, Stack, StackProps } from '@mui/material';
import styled from 'styled-components';

export const GroupButton = ({ children, ...props }: PropsWithChildren<ButtonProps>) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

/**
 * 커스텀 다중(가로 or 세로) 버튼 컴포넌트
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | undefined | null | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & undefined) | (Iterable<React.ReactNode> & undefined) | (React.ReactPortal & undefined)} children
 * @param {Omit<React.PropsWithChildren<ButtonProps>, "children">} props
 * @returns {JSX.Element}
 * @constructor
 */
const MultipleButtonGroup = ({ children, ...props }: PropsWithChildren<StackProps>) => {
  return (
    <Container>
      <Stack {...props}>{children}</Stack>
    </Container>
  );
};

export default MultipleButtonGroup;

const Container = styled(Box)`
  width: auto;
`;

const StyledButton = styled(Button)`
  font-size: 15px;
  font-style: normal;
  letter-spacing: 0.46px;
  text-transform: uppercase;
`;

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Box, InputLabel } from '@mui/material';

interface Props {
  label: string;
  children: ReactNode;
  required?: boolean;
  id?: string;
  htmlFor?: string;
}
const FormCell = ({ label, id, htmlFor, children, required = false }: Props) => {
  return (
    <StyledCellBox>
      <InputLabel className="cell-header-label" id={id} htmlFor={htmlFor} required={required}>
        {label}
      </InputLabel>
      {children}
    </StyledCellBox>
  );
};

export default FormCell;

const StyledCellBox = styled(Box)`
  display: flex;
  flex: 1;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  & label.cell-header-label {
    font-weight: 500;
    font-size: 14px;
    width: 95px;
    white-space: break-spaces;
    margin-right: 33px;
  }
  & p {
    font-size: 14px;
  }
  & .MuiInputBase-root {
    margin-right: 8px;
  }
  & label {
    font-size: 16px;
  }
`;

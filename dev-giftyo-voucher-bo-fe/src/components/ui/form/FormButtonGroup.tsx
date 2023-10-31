import * as React from 'react';
import { Box, Button } from '@mui/material';
import styled from 'styled-components';

interface Props {
  onSubmit?: () => void;
  submitButtonText?: string;
  onCancel?: () => void;
  cancelButtonText?: string;
  onDelete?: () => void;
  deleteButtonText?: string;
  align?: 'center' | 'flex-start' | 'flex-end';
}
const FormButtonGroup = ({
  align = 'center',
  onSubmit,
  submitButtonText = '저장',
  onDelete,
  deleteButtonText = '삭제',
  onCancel,
  cancelButtonText = '취소',
}: Props) => {
  return (
    <ButtonGroupBox display="flex" justifyContent={align}>
      {!!onCancel && (
        <Button size="large" color="info" variant="outlined" onClick={onCancel}>
          {cancelButtonText}
        </Button>
      )}
      {!!onDelete && (
        <Button size="large" color="warning" variant="outlined" onClick={onDelete}>
          {deleteButtonText}
        </Button>
      )}
      {!!onSubmit && (
        <Button size="large" variant="contained" onClick={onSubmit}>
          {submitButtonText}
        </Button>
      )}
    </ButtonGroupBox>
  );
};
export default FormButtonGroup;
const ButtonGroupBox = styled(Box)`
  margin-top: 24px;
  & button {
    font-weight: 500;
    font-size: 15px;
    padding: 8px 22px;
    margin-right: 16px;
  }
  & button:last-child {
    margin-right: 0;
  }
`;

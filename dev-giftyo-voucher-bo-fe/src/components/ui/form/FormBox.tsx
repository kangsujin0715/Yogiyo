import * as React from 'react';
import { ReactNode } from 'react';
import { Paper } from '@mui/material';
import FormButtonGroup from 'src/components/ui/form/FormButtonGroup';

interface Props {
  buttonAlign?: 'flex-start' | 'flex-end' | 'center';
  onSubmit?: () => void;
  submitButtonText?: string;
  onCancel?: () => void;
  cancelButtonText?: string;
  onDelete?: () => void;
  deleteButtonText?: string;
  children: ReactNode;
}
const FormBox = ({
  buttonAlign,
  children,
  onSubmit,
  submitButtonText,
  onCancel,
  cancelButtonText,
  onDelete,
  deleteButtonText,
}: Props) => {
  return (
    <Paper sx={{ padding: '24px' }}>
      {children}
      <FormButtonGroup
        align={buttonAlign}
        onSubmit={onSubmit}
        submitButtonText={submitButtonText}
        onCancel={onCancel}
        cancelButtonText={cancelButtonText}
        onDelete={onDelete}
        deleteButtonText={deleteButtonText}
      />
    </Paper>
  );
};
export default FormBox;

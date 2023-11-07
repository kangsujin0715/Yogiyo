import FormCell from 'src/components/ui/form/shared/FormCell';
import { Meta, StoryObj } from '@storybook/react';
import { TextField, Typography } from '@mui/material';
import FormRadioElement from 'src/components/ui/form/elements/FormRadioElement';

const meta = {
  title: 'Yogiyo/common/form/FormCell',
  component: FormCell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withTypography: Story = {
  args: {
    label: '상품명',
    children: <Typography>test goods</Typography>,
  },
};

export const withTextField: Story = {
  args: {
    label: '상품명',
    htmlFor: 'test',
    children: <TextField id="test">test goods</TextField>,
  },
};

export const withRadio: Story = {
  args: {
    label: '상품유형',
    htmlFor: 'test',
    children: (
      <FormRadioElement
        name="test"
        options={[
          { name: '선택1', value: 1 },
          { name: '선택2', value: 2 },
          { name: '선택3', value: 3 },
        ]}
      />
    ),
  },
};

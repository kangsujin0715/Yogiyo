import FormCell from 'src/components/ui/form/shared/FormCell';
import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@mui/material';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';

const meta = {
  title: 'Yogiyo/common/form/FormRow',
  component: FormRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const preview: Story = {
  args: {
    children: (
      <>
        <FormCell label="일반거래 신청서 상품코드">
          <Typography>A30</Typography>
        </FormCell>
        <FormCell label="일반거래 신청서 상품명">
          <Typography>테스트 상품</Typography>
        </FormCell>
      </>
    ),
  },
};

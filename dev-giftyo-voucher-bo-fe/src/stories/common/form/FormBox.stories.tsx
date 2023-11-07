import FormCell from 'src/components/ui/form/shared/FormCell';
import { Meta, StoryObj } from '@storybook/react';
import { TextField, Typography } from '@mui/material';
import FormBox from 'src/components/ui/form/FormBox';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';
import FormRadioElement from 'src/components/ui/form/elements/FormRadioElement';
import FormArticle from 'src/components/ui/form/FormArticle';
import AddressInput from 'src/components/common/AddressInput';

const meta = {
  title: 'Yogiyo/common/form/FormBox',
  component: FormBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = (
  <>
    <FormArticle title="상품정보">
      <FormRow>
        <FormCell label="상품명">
          <Typography>test goods</Typography>
        </FormCell>
        <FormCell label="상품가격">
          <Typography>5,000원</Typography>
        </FormCell>
      </FormRow>
    </FormArticle>
    <FormArticle title="브랜드">
      <FormRow>
        <FormCell label="브랜드" htmlFor="brand">
          <TextField id="brand"></TextField>
        </FormCell>
        <FormCell label="사용여부">
          <FormRadioElement
            defaultValue="Y"
            options={[
              { name: '사용', value: 'Y' },
              { name: '미사용', value: 'N' },
            ]}
          />
        </FormCell>
      </FormRow>
    </FormArticle>
    <FormArticle title="배송정보">
      <FormRow>
        <FormCell label="주소">
          <AddressInput onChange={(addr) => console.log(addr)} />
        </FormCell>
      </FormRow>
    </FormArticle>
  </>
);
export const withOnSubmit: Story = {
  args: {
    onSubmit: () => {},
    onCancel: undefined,
    onDelete: undefined,
    children,
  },
};

export const withOnCancel: Story = {
  args: {
    onCancel: () => {},
    onSubmit: undefined,
    onDelete: undefined,
    children,
  },
};

export const withOnDelete: Story = {
  args: {
    onDelete: () => {},
    onSubmit: undefined,
    onCancel: undefined,
    children,
  },
};

export const buttonAlignLeft: Story = {
  args: {
    onSubmit: () => {},
    buttonAlign: 'flex-start',
    children,
  },
};

export const buttonAlignRight: Story = {
  args: {
    onSubmit: () => {},
    buttonAlign: 'flex-end',
    children,
  },
};

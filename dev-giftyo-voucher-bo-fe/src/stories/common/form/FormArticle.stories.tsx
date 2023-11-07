import { Meta, StoryObj } from '@storybook/react';
import FormArticle from 'src/components/ui/form/FormArticle';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';
import FormCell from 'src/components/ui/form/shared/FormCell';
import { Typography } from '@mui/material';
import FormRadioElement from 'src/components/ui/form/elements/FormRadioElement';

const meta = {
  title: 'Yogiyo/common/form/FormArticle',
  component: FormArticle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withUnMask: Story = {
  args: {
    title: '상품정보',
    unMask: () => {},
    children: (
      <>
        <FormRow>
          <FormCell label="일반거래 신청서 상품코드">
            <Typography>A30</Typography>
          </FormCell>
          <FormCell label="일반거래 신청서 상품명">
            <Typography>테스트 상품</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="사용여부" htmlFor="useYn">
            <FormRadioElement
              id="useYn"
              defaultValue="Y"
              options={[
                { name: '사용', value: 'Y' },
                { name: '미사용', value: 'N' },
              ]}
            />
          </FormCell>
        </FormRow>
      </>
    ),
  },
};

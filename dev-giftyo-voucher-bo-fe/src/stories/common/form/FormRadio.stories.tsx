import { Meta, StoryObj } from '@storybook/react';
import FormRadioElement from 'src/components/ui/form/elements/FormRadioElement';

const meta = {
  title: 'Yogiyo/common/form/radio',
  component: FormRadioElement,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormRadioElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const preview: Story = {
  args: {
    name: 'test',
    options: [
      { name: 'test1', value: 1 },
      { name: 'test2', value: 2 },
      { name: 'test3', value: 3 },
    ],
  },
};

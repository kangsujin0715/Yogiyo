import { Meta, StoryObj } from '@storybook/react';
import SplitButtonGroup from 'src/components/ui/button/SplitButton';

const meta = {
  title: 'Yogiyo/common/button/SplitButton',
  component: SplitButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SplitButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const preview: Story = {
  args: {
    options: [
      { tag: 1, title: 'test1' },
      { tag: 2, title: 'test2' },
      { tag: 3, title: 'test3' },
      { tag: 4, title: 'test4' },
      { tag: 5, title: 'test5' },
    ],
    handleOptionClick: () => {},
  },
};

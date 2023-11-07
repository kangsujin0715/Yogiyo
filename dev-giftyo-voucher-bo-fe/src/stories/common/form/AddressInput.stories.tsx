import { Meta, StoryFn } from '@storybook/react';
import AddressInput from 'src/components/common/AddressInput';
import { useState } from 'react';
import { Address } from 'react-daum-postcode/lib/loadPostcode';

const meta = {
  title: 'Yogiyo/common/form/AddressInput',
  component: AddressInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AddressInput>;

export default meta;

export const useAddr: StoryFn<typeof AddressInput> = () => {
  const [addr, setAddr] = useState<Address>();
  return <AddressInput onChange={(args) => setAddr(args)} {...addr} />;
};

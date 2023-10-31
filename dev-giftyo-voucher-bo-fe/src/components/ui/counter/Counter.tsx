import { PropsWithChildren } from 'react';
import { CountLabel } from 'src/components/ui/counter/CountLabel';
import { Count } from 'src/components/ui/counter/Count';
import { CountIncrement } from 'src/components/ui/counter/CountIncrement';
import { CountDecrement } from 'src/components/ui/counter/CountDecrement';

export const Counter = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

Counter.Count = Count;
Counter.Label = CountLabel;
Counter.Increment = CountIncrement;
Counter.Decrement = CountDecrement;

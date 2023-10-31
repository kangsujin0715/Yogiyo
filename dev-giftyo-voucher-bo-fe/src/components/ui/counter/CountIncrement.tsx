import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export const CountIncrement = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return <button {...props}>{children}</button>;
};

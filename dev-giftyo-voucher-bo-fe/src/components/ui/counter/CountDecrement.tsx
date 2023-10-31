import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export const CountDecrement = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return <button {...props}>{children}</button>;
};

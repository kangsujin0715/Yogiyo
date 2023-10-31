import { Dispatch, SetStateAction, useState } from 'react';

type ReturnType = [
  number,
  () => void,
  () => void,
  () => void,
  Dispatch<SetStateAction<number>>,
];

const useCounter = (
  initialValue: number = 0,
  maxCount?: number,
  isBlockBelowInitialValue: boolean = true,
): ReturnType => {
  const [count, setCount] = useState(initialValue || 0);
  const increment = () =>
    setCount((x) => (!maxCount ? x + 1 : Math.min(x + 1, maxCount)));
  const decrement = () =>
    setCount((x) =>
      !isBlockBelowInitialValue ? x - 1 : Math.max(x - 1, initialValue),
    );
  const reset = () => setCount(initialValue || 0);

  return [count, increment, decrement, reset, setCount];
};

export default useCounter;

import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

type ReturnTypes<T> = [
  T,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>,
];

const useInput = <T>(
  initialData: T,
  validator?: (value: string, name?: string) => boolean,
): ReturnTypes<T> => {
  const [data, setData] = useState(initialData);

  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      let willUpdate = true;

      if (typeof validator === 'function') {
        willUpdate = validator(value, name);
      }

      if (!willUpdate) return;

      if (typeof initialData === 'object') {
        setData({
          ...data,
          [name]: value,
        });
      } else {
        setData(value as unknown as T);
      }
    },
    [data],
  );

  return [data, handler, setData];
};

export default useInput;

import { useEffect, useRef, useState } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  console.log(initialValues?.count);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);

    const maxValue = initialValues?.maxCount || newValue;

    const finalValue = Math.min(newValue, maxValue);

    setCounter(finalValue);
    onChange && onChange({ count: finalValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }
    setCounter(initialValues?.count || value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    isMaxReached: !!initialValues?.count && counter === initialValues.maxCount,
    maxCount: initialValues?.maxCount,
    reset,
  };
};

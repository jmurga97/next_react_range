import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { setInRange } from "@/utils/setInRange";
import { useDebouncedCallback } from "use-debounce";
import type { RangeLimit } from "@/types";
type Params = {
  range: RangeLimit;
  setBullet: React.Dispatch<React.SetStateAction<number>>;
  bullet: number;
  bulletReference: number;
  id: string;
};

export const useInputRange = ({
  bullet,
  range,
  id,
  setBullet,
  bulletReference,
}: Params) => {
  const [input, setInput] = useState<string | number>(bullet);

  useEffect(() => {
    if (bullet) {
      setInput(bullet);
    }
  }, [bullet]);

  const checkAndSetBullet = useDebouncedCallback((valueInRange: number) => {
    if (id === "min") {
      valueInRange < bulletReference
        ? setBullet(valueInRange)
        : setBullet(range.min);
    }
    if (id === "max") {
      valueInRange > bulletReference
        ? setBullet(valueInRange)
        : setBullet(range.min);
    }

  }, 350);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const pattern = /^[0-9\b]+$/

    // Me aseguro que el input sea únicamente numerico
    if (value === '' || pattern.test(value)) {
      const valueInRange = setInRange(range, parseInt(value));
      checkAndSetBullet(valueInRange);
      setInput(value);
    }
  };

  return {
    input,
    handleInputChange,
  };
};

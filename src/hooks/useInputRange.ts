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
  setInput: (range: RangeLimit) => void;
};


export const useInputRange = ({
  bullet,
  range,
  id,
  setBullet,
  bulletReference,
  setInput
}: Params) => {
  const [input, setInputRange] = useState<string | number>(bullet);

  useEffect(() => {
    if (bullet) {
      setInputRange(bullet);
      if (id === 'min') {
        setInput({
          min: bullet,
          max: bulletReference
        })
      } else {
        setInput({
          min: bulletReference,
          max: bullet
        })
      }
    }
  }, [bullet, setInput, id, bulletReference]);

  const checkAndSetBullet = useDebouncedCallback((valueInRange: number) => {
    if (id === "min") {
      if (valueInRange < bulletReference) {
        setBullet(valueInRange);
        setInputRange(valueInRange)
      } else {
        setBullet(bulletReference - 5);
        setInputRange(bulletReference - 5)
      }
    }
    if (id === "max") {
      if (valueInRange > bulletReference) {
        setBullet(valueInRange);
        setInputRange(valueInRange)
      } else {
        setBullet(bulletReference + 5);
        setInputRange(bulletReference + 5)
      }
    }
  }, 350);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const pattern = /^[0-9\b]+$/;

    // Me aseguro que el input sea únicamente numerico
    if (value === "" || pattern.test(value)) {
      const valueInRange = setInRange(range, parseInt(value));
      checkAndSetBullet(valueInRange);
      setInputRange(value);
    }
  };

  return {
    input,
    handleInputChange,
  };
};

import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { setInRange } from "@/utils/setInRange";
import { useDebouncedCallback } from "use-debounce";
import type { RangeLimit } from "@/types";
type Props = {
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
}: Props) => {
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
    // Me aseguro que el input sea únicamente numerico
    const numericValue = value.replace(/\D/g, "");
    const inputValue = numericValue === "" ? range.min : numericValue;
    const valueInRange = setInRange(range, parseInt(inputValue.toString()));
    checkAndSetBullet(valueInRange);
    setInput(value);
  };

  return {
    input,
    handleInputChange,
  };
};

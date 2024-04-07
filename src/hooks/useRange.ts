import { useState, useRef, PointerEventHandler } from "react";
import { setInFixedRange } from "@/utils/setInFixedRange";
import { setInRange } from "@/utils/setInRange";
import type { RangeLimit } from "@/types";

type Params = {
    range: RangeLimit;
    setInput: (range: RangeLimit) => void;
    steps?: number[];
    isFixed?: boolean;
};

export const useRange = ({ isFixed, steps, range, setInput }: Params) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [bulletMin, setBulletMin] = useState(range.min);
    const [bulletMax, setBulletMax] = useState(range.max);
    const [isDraggingMin, setIsDraggingMin] = useState(false);
    const [isDraggingMax, setIsDraggingMax] = useState(false);

    const handleMouseMove: PointerEventHandler<HTMLDivElement> = (event) => {
        const rect = sliderRef.current?.getBoundingClientRect();

        if (rect) {
            const offsetX = event.clientX - rect.left;
            const selectedValue = Math.round((offsetX * range.max) / rect.width);
            const valueInRange = isFixed ? setInFixedRange(steps, selectedValue) : setInRange(range, selectedValue);
            if (isDraggingMin) {
                if (valueInRange < bulletMax) {
                    setBulletMin(valueInRange);
                }
            }
            if (isDraggingMax) {
                if (valueInRange > bulletMin) {
                    setBulletMax(valueInRange);
                }
            }
        }
        setInput({ min: bulletMin, max: bulletMax })
    };

    return {
        sliderRef,
        bulletMin,
        setBulletMin,
        bulletMax,
        setBulletMax,
        isDraggingMin,
        setIsDraggingMin,
        isDraggingMax,
        setIsDraggingMax,
        handleMouseMove
    }
}
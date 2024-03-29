import { useEffect, useState, ChangeEvent } from "react";
import { setInRange } from "../../utils/setInRange";
import { useDebouncedCallback } from "use-debounce";
import type { RangeLimit } from "@/types";
import { useInputRange } from "@/hooks/useInputRange";
type Props = {
    range: RangeLimit;
    setBullet: React.Dispatch<React.SetStateAction<number>>;
    label: string;
    bullet: number;
    bulletReference: number;
    id: string;
    isFixed: boolean;
};

export const InputRange = ({
    range,
    setBullet,
    label,
    bullet,
    bulletReference,
    id,
    isFixed,
}: Props) => {

    const { input, handleInputChange } = useInputRange({ range, bullet, setBullet, id, bulletReference })

    return (
        <div className="flex items-center justify-center gap-2">
            <label htmlFor={id} className="block text-md font-medium text-white">
                {label}
            </label>
            <input
                id={id}
                type="text"
                className={`bg-transparent ${!isFixed && "border-b-2"
                    } text-white text-sm text-center w-10  py-1.5 `}
                value={input}
                onChange={handleInputChange}
                readOnly={isFixed}
            />
            <span>€</span>
        </div>
    );
};

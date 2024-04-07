import type { RangeLimit } from "@/types";
import { useInputRange } from "@/hooks/useInputRange";

type Props = {
    range: RangeLimit;
    setBullet: React.Dispatch<React.SetStateAction<number>>;
    bullet: number;
    bulletReference: number;
    id: string;
    isFixed: boolean;
};

export const InputRange: React.FC<Props> = ({
    range,
    setBullet,
    bullet,
    bulletReference,
    id,
    isFixed,
}) => {

    const { input, handleInputChange } = useInputRange({ range, bullet, setBullet, id, bulletReference })

    return (
        <div className="flex items-center justify-center text-black ml-2">
            <input
                data-testid="input-range"
                id={id}
                type="text"
                className={`bg-transparent text-sm text-center w-10 `}
                value={input}
                onChange={handleInputChange}
                readOnly={isFixed}
            />
            <span>€</span>
        </div>
    );
};

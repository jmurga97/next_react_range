import { InputRange } from "./InputRange";
import { RangeBullets } from "./RangeBullets";
import type { RangeLimit } from "@/types";
import { getBulletPosition } from "../../utils/getBulletPosition";
import { useRange } from "@/hooks/useRange";

type Props = {
  range: RangeLimit;
  steps?: number[];
  isFixed?: boolean;
};

const Range = ({
  range = { min: 0, max: 100 },
  steps,
  isFixed = false,

}: Props) => {
  const {
    sliderRef,
    handleMouseMove,
    isDraggingMax,
    isDraggingMin,
    setIsDraggingMin,
    setIsDraggingMax,
    bulletMin,
    setBulletMin,
    bulletMax,
    setBulletMax,
  } = useRange({ range, steps, isFixed });

  return (
    <>
      <div className="flex flex-row gap-3">


        <InputRange
          isFixed={isFixed}
          range={range}
          id="min"
          label="Min."
          bullet={bulletMin}
          bulletReference={bulletMax}
          setBullet={setBulletMin}
        />
        <div
          ref={sliderRef}
          onPointerMove={handleMouseMove}
          className="w-[200px] md:w-[450px] h-12 flex items-center"
        >
          <div className="relative w-full h-1 bg-black rounded-full]">
            <RangeBullets
              isFixed={isFixed}
              isDragging={isDraggingMin}
              setIsDragging={setIsDraggingMin}
              bulletPosition={getBulletPosition(range, bulletMin)}
            />
            <RangeBullets
              isFixed={isFixed}
              isDragging={isDraggingMax}
              setIsDragging={setIsDraggingMax}
              bulletPosition={getBulletPosition(range, bulletMax)}
            />
          </div>
        </div>

        <InputRange
          isFixed={isFixed}
          range={range}
          id="max"
          label="Max."
          bullet={bulletMax}
          bulletReference={bulletMin}
          setBullet={setBulletMax}
        />
      </div>
    </>
  );
};

export default Range;

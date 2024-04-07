import { PointerEventHandler, useRef, useEffect } from "react";

type Props = {
  isDragging: boolean;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  bulletPosition: number;
  isFixed: boolean;
};

export const RangeBullets = ({
  isDragging,
  setIsDragging,
  bulletPosition,
  isFixed = false,
}: Props) => {
  const bulletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseDown = (e: PointerEvent) => {
      bulletRef.current?.setPointerCapture(e.pointerId);
      setIsDragging(true);
    };

    const onMouseUp = (e: PointerEvent) => {
      bulletRef.current?.releasePointerCapture(e.pointerId);
      setIsDragging(false);
    };

    const bulletElement = bulletRef.current;

    if (bulletElement) {
      bulletElement.addEventListener("pointerdown", onMouseDown);
      bulletElement.addEventListener("pointerup", onMouseUp);

      return () => {
        bulletElement.removeEventListener("pointerdown", onMouseDown);
        bulletElement.removeEventListener("pointerup", onMouseUp);
      };
    }
  }, [setIsDragging]);

  return (
    <div
      ref={bulletRef}
      className={`${isDragging ? "cursor-grabbing" : "cursor-grab"} ${
        isFixed ? "transition-all" : "transition-transform"
      }
                            absolute w-5 h-5 bottom-[-8px] border border-white rounded-full bg-black cursor-grab hover:scale-150 shadow-md`}
      style={{ left: `${bulletPosition}%` }}
    />
  );
};

import { PointerEventHandler, useRef } from "react";

type Props = {
  isDragging: boolean;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  bulletPosition: number;
  isFixed: boolean;
};

export const RangeBullets = ({ isDragging, setIsDragging, bulletPosition, isFixed = false }: Props) => {
  const bulletRef = useRef<HTMLDivElement>(null);

  const onMouseDown: PointerEventHandler<HTMLDivElement> = (e) => {
      bulletRef.current?.setPointerCapture(e.pointerId)
      setIsDragging(true)
  };

  const onMouseUp: PointerEventHandler<HTMLDivElement> = (e) => {
      bulletRef.current?.releasePointerCapture(e.pointerId)
      setIsDragging(false)
  };

  return (
      <div
          ref={bulletRef}
          onPointerDown={onMouseDown}
          onPointerUp={onMouseUp}
          className={`${isDragging ? "cursor-grabbing" : "cursor-grab"} ${isFixed ? 'transition-all' : 'transition-transform'}
                      absolute w-5 h-5 bottom-[-8px] border border-white rounded-full bg-black cursor-grab hover:scale-150 shadow-md`}
          style={{ left: `${bulletPosition}%` }}
      />
  )
}

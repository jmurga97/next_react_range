type Props = {
  title: string,
  children:React.ReactNode
}

const RangeContainer:React.FC<Props> = ({
  title,
  children,
}) => {
  return (
    <>
      <h2 className="my-12 font-light text-2xl md:text-6xl">{title}</h2>
      <div className="w-full h-full bg-slate-200/20 border-white/30 border shadow-lg backdrop-blur-3xl rounded-lg flex flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
};

export default RangeContainer;

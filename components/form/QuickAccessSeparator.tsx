const QuickAccessSeparator = () => {
  return (
    <div className="flex items-center w-full my-2">
      <div className="bg-stone-400 h-[1px] w-full "></div>
      <span className="text-muted-foreground text-xs whitespace-nowrap inline-block mx-4">
        Quick access
      </span>
      <div className="bg-stone-400 h-[1px] w-full"></div>
    </div>
  );
};
export default QuickAccessSeparator;

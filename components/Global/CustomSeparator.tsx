const CustomSeparator = ({ heading }: { heading: string }) => {
  return (
    <div className="flex gap-2 items-center w-full">
      <span className="pl-1 font-semibold text-sm text-primary whitespace-nowrap">
        {heading}
      </span>
      <div className="h-[1px] w-full bg-indigo-200 mt-6 mb-3"></div>
    </div>
  );
};
export default CustomSeparator;

import { cn } from "@/lib/utils";

const FilterArea = ({
  children,
  className,
  heading,
  isLast = false,
}: {
  children: React.ReactNode;
  heading: string;
  className?: string;
  isLast?: boolean;
}) => {
  return (
    <div className={cn("p-2 py-4", className, !isLast ? "border-b" : "")}>
      <h5 className="font-bold text-sm mb-4">{heading}</h5>
      {children}
    </div>
  );
};
export default FilterArea;

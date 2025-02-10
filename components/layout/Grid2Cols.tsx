import { cn } from "@/lib/utils";

const Grid2Cols = ({
  children,
  className,
  breakPoint = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  breakPoint?: "sm" | "md" | "lg" | "xl";
}) => {
  const baseClass = "grid grid-cols-1";
  let gridClass: string;
  switch (breakPoint) {
    case "sm":
      gridClass = "sm:grid-cols-2";
      break;
    case "md":
      gridClass = "md:grid-cols-2";
      break;
    case "lg":
      gridClass = "lg:grid-cols-2";
      break;
    case "xl":
      gridClass = "xl:grid-cols-2";
      break;
    default:
      gridClass = "lg:grid-cols-2";
      break;
  }
  return (
    <div className={cn(`${baseClass} ${gridClass}`, className)}>{children}</div>
  );
};
export default Grid2Cols;

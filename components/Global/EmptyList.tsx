import { cn } from "@/lib/utils";

const EmptyList = ({
  heading = "No items found.",
  className,
}: {
  heading?: string;
  className?: string;
}) => {
  return <h2 className={cn("text-lg", className)}>{heading}</h2>;
};
export default EmptyList;

import { cn } from "@/lib/utils";

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative", className)}>

      <h2
        className={cn(
          "text-3xl sm:text-4xl font-[700] capitalize font-archivo-narrow"
        )}
      >
        {children}
      </h2>

    </div>
  );
};
export default SectionTitle;

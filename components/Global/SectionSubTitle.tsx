import { cn } from "@/lib/utils";

const SectionSubTitle = ({
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
          "text-lg sm:text-xl text-muted-foreground font-archivo-narrow"
        )}
      >
        {children}
      </h2>
    </div>
  );
};
export default SectionSubTitle;

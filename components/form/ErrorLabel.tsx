import { cn } from "@/lib/utils";
import { FieldErrors } from "react-hook-form";

type ErrorLabelProps = {
  errors: FieldErrors;
  name: string;
  className?: string;
};

const ErrorLabel = ({ errors, name, className }: ErrorLabelProps) => {
  return (
    <>
      <p
        className={cn(
          "inline-block text-red-500 bg-red-100 px-3 rounded-lg py-1 md:mt-2 mt-1 font-semibold md:text-[13px] text-xs",
          errors[name] ? "opacity-100" : "opacity-0",
          className
        )}
      >
        {String(errors[name]?.message) || ""}
      </p>
    </>
  );
};
export default ErrorLabel;

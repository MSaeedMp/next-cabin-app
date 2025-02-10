"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormContext } from "react-hook-form";

type btnSize = "sm" | "lg" | "default" | "icon";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className={cn("capitalize", className)}
      size={size}
    >
      {isSubmitting ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

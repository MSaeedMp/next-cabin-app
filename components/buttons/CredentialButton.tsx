"use client";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type CredentialButtonProps = {
  className?: string;
  text?: string;
};

export function CredentialButton({
  className,
  text = "Sign in",
}: CredentialButtonProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className={cn(
        "font-bold sm:text-base text-sm py-6 rounded-xl text-white",
        className
      )}
    >
      {isSubmitting ? (
        <>
          <ReloadIcon className="mr-2 h-6 w-6 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { PiSignInThin } from "react-icons/pi";
import Link from "next/link";

export const SignInTrigger = ({
  className,
  iconSize = "6",
  onClick,
}: {
  className?: string;
  iconSize?: string;
  onClick?: () => void;
}) => {
  return (
    <Link href="/api/auth/signin">
      <Button
        type="submit"
        variant="ghost"
        className={cn(
          "w-full flex items=center justify-start text-base text-stone-200 py-6 sm:py-8 px-4",
          className
        )}
        onClick={onClick}
      >
        <PiSignInThin className={`!w-${iconSize} !h-${iconSize}`} />
        <span>Login</span>
      </Button>
    </Link>
  );
};

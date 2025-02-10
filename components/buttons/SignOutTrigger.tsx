import { cn } from "@/lib/utils";
import { PiSignOutThin } from "react-icons/pi";
import { signOutAction } from "@/actions/user-action";
import { Button } from "../ui/button";

export const SignOutTrigger = ({
  className,
  iconSize = "6",
  onClick,
}: {
  className?: string;
  iconSize?: string;
  onClick?: () => void;
}) => {
  return (
    <form action={signOutAction} className="w-full">
      <Button
        type="submit"
        variant="ghost"
        className={cn(
          "w-full flex items=center justify-start text-base py-6 sm:py-8 px-4 gap-4",
          className
        )}
        onClick={onClick}
      >
        <PiSignOutThin className={`!w-${iconSize} !h-${iconSize}`} />
        <span>Logout</span>
      </Button>
    </form>
  );
};

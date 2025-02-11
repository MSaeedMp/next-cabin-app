import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const LinkButton = ({
  text,
  to,
  size = "lg",
  className,
  onClick,
}: {
  text: string;
  to: string;
  size?: "sm" | "lg" | "default" | "icon";
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link href={to}>
      <Button
        onClick={onClick}
        size={size}
        className={cn("text-white font-bold", className)}
      >
        {text}
      </Button>
    </Link>
  );
};
export default LinkButton;

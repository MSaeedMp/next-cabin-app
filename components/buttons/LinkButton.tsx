import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const LinkButton = ({
  text,
  to,
  size = "lg",
  className,
}: {
  text: string;
  to: string;
  size?: "sm" | "lg" | "default" | "icon";
  className?: string;
}) => {
  return (
    <Link href={to}>
      <Button size={size} className={cn("text-white font-bold", className)}>
        {text}
      </Button>
    </Link>
  );
};
export default LinkButton;

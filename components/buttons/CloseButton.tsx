import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";

const CloseButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      variant={"ghost"}
      className={cn("hover:bg-white hover:scale-110", className)}
      onClick={onClick}
    >
      <IoClose className="!w-6 !h-6" />
    </Button>
  );
};
export default CloseButton;

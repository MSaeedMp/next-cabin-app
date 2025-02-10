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
    <Button variant={"ghost"} className={className} onClick={onClick}>
      <IoClose className="!w-6 !h-6" />
    </Button>
  );
};
export default CloseButton;

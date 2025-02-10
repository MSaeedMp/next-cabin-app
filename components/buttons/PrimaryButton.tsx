import { Button } from "../ui/button";

const PrimaryButton = ({
  className,
  onClick,
  text = "Open",
}: {
  className?: string;
  onClick?: () => void;
  text?: string;
}) => {
  return (
    <Button onClick={onClick} className={className}>
      {text}
    </Button>
  );
};
export default PrimaryButton;

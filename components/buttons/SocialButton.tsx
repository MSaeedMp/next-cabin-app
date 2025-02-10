import { FaApple, FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const SocialButton = ({
  provider,
  className,
}: {
  provider: "google" | "github" | "apple";
  className: string;
}) => {
  const iconStyle = "!w-6 !h-6";
  const providerDetails = () => {
    switch (provider) {
      case "google":
        return {
          icon: <FaGoogle className={iconStyle} />,
          name: "Google",
        };
      case "apple":
        return {
          icon: <FaApple className={iconStyle} />,
          name: "Apple",
        };
      case "github":
        return {
          icon: <FaGithub className={iconStyle} />,
          name: "github",
        };
      default:
        const never: never = provider;
        throw new Error(`Invalid provider name: ${never}`);
    }
  };
  const { icon, name } = providerDetails();

  return (
    <div>
      <Button
        type="submit"
        name="action"
        value={provider}
        className={cn(
          "py-6 font-bold text-sm sm:text-base rounded-xl transition-colors duration-200 text-white",
          className
        )}
      >
        {icon}
        <span>Continue with {name}</span>
      </Button>
    </div>
  );
};

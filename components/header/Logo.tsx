import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  type,
  onClick,
  className,
}: {
  type: "blue" | "white";
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div className="h-full flex items-center focus:outline-stone-900">
      <Link href="/" onClick={onClick}>
        <div
          className={cn("relative w-[85px] h-[60px] lg:w-[100px]", className)}
        >
          <Image
            src={`/logo-${type}.png`}
            alt="next robot logo"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            unoptimized
          />
        </div>
      </Link>
    </div>
  );
};
export default Logo;

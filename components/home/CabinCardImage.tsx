import { cn } from "@/lib/utils";
import Image from "next/image";

const CabinCardImage = ({
  image,
  alt,
  reversed = false,
}: {
  image: string;
  alt: string;
  reversed?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative h-52 sm:h-64 w-full overflow-hidden",
        reversed ? "rounded-b-sm" : "rounded-t-sm"
      )}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
        priority
        className={cn(
          "w-full object-cover transform group-hover:scale-110 transition-transform duration-500",
          reversed ? "rounded-b-sm" : "rounded-t-sm"
        )}
      />
    </div>
  );
};
export default CabinCardImage;

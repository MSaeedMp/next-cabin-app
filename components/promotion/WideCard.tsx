import Image from "next/image";
import PrimaryLinkButton from "../buttons/LinkButton";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

const WideCard = ({
  heading,
  subHeading,
  buttonText,
  to,
  imageSrc,
  imageAlt,
  className,
}: {
  heading: string;
  subHeading: string;
  buttonText: string;
  to: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}) => {
  return (
    <Card className={cn("shadow-none", className)}>
      <CardContent className="flex justify-between items-center p-4 md:p-6 gap-4">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-lg">{heading}</h4>
          <p className="text-muted-foreground text-sm whitespace-normal">
            {subHeading}
          </p>
          <PrimaryLinkButton to={to} text={buttonText} className="mt-5" />
        </div>
        <div className="relative sm:h-36 h-32 aspect-square">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-sm"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardContent>
    </Card>
  );
};
export default WideCard;

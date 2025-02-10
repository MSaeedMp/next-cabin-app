import { cn } from "@/lib/utils";
import Link from "next/link";

const CabinCardLinkHeading = ({
  heading,
  href,
  view = "list",
}: {
  heading: string;
  href: string;
  view?: "list" | "grid";
}) => {
  if (view === "list")
    return (
      <Link href={href}>
        <h2 className={cn("text-2xl text-primary font-[800] hover:underline")}>
          {heading}
        </h2>
      </Link>
    );
  if (view === "grid")
    return (
      <Link href={href}>
        <h2 className={cn("text-lg text-primary font-[800] hover:underline")}>
          {heading}
        </h2>
      </Link>
    );
};
export default CabinCardLinkHeading;

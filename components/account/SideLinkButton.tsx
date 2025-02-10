"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const SideLinkButton = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  const pathname = usePathname();
  return (
    <Link className={pathname === href ? " text-primary bg-accent rounded-xl" : ""} href={href}>
      <Button
        variant="ghost"
        className={cn("w-full flex items-center justify-start rounded-xl", className)}
      >
        {children}
      </Button>
    </Link>
  );
};
export default SideLinkButton;

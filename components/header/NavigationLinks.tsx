"use client";

import Link from "next/link";
import AccountNav from "./AccountNav";
import { AuthUserType } from "@/utils/types";
import { navLinks } from "@/utils/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const baseStyle = "px-3 hover:text-stone-300 h-full block flex items-center";

const NavigationLinks = ({ user }: { user: AuthUserType | undefined }) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(({ name, href }) => (
        <Link
          key={name}
          className={cn(
            baseStyle,
            pathname === href ? "underline underline-offset-4" : ""
          )}
          href={href}
        >
          {name}
        </Link>
      ))}
      {!user ? (
        <>
          <Link className={baseStyle} href="/api/auth/signin">
            Login
          </Link>
          <Link className={baseStyle} href="/api/auth/signup">
            Register
          </Link>
        </>
      ) : (
        <AccountNav user={user} />
      )}
    </>
  );
};

export default NavigationLinks;

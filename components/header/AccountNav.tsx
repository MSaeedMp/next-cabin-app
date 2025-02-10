import Image from "next/image";
import Link from "next/link";
import React from "react";
import { accountLinks } from "@/utils/constants";
import { SignOutTrigger } from "../buttons/SignOutTrigger";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { AuthUserType } from "@/utils/types";

const AccountNav = ({ user }: { user: AuthUserType }) => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent h-full w-full text-start flex justify-start p-0 gap-4 py-3 hover:text-stone-300">
            <Link href="/account">
              <div className="flex gap-4">
                <div className="relative w-12 aspect-square rounded-full">
                  <Image
                    src={user.image || "/profile-fallback.png"}
                    alt={user.name || "user profile"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-lg">{user.name}</h4>
                  <h4 className="text-sm">Welcome to next cabin</h4>
                </div>
              </div>
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!rounded-xl px-0 mx-0 ">
            <ul className="w-[220px] ">
              {accountLinks.map((item) => (
                <ListItem className="p-5" key={item.name} href={item.href}>
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </div>
                </ListItem>
              ))}
              <ListItem className="p-0">
                <div className="flex items-center gap-3 w-full">
                  <SignOutTrigger
                    iconSize="5"
                    className="!px-6 !py-6  text-sm hover:text-primary !gap-3 w-full h-full"
                  />
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default AccountNav;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium font-inter">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

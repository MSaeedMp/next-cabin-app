"use client";

import Link from "next/link";
import { SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";
import { IconType } from "react-icons/lib";

type LinkType = {
  name: string;
  href: string;
  icon: IconType;
};

const SidebarList = ({ links }: { links: LinkType[] }) => {
  const { toggleSidebar } = useSidebar();

  return (
    <div>
      {links.map((link) => (
        <SidebarMenuItem key={link.name}>
          <SidebarMenuButton asChild>
            <Link
              className="py-7 sm:py-8 px-4 flex links-center gap-4"
              href={link.href}
              onClick={toggleSidebar}
            >
              <link.icon className="!w-5 !h-5 text-primary" />
              <span className="text-sm text-primary">{link.name}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </div>
  );
};
export default SidebarList;

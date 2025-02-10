"use client";
import { SidebarMenu, useSidebar } from "@/components/ui/sidebar";
import { AuthUserType } from "@/utils/types";
import { accountLinks, quickAccessLinks } from "@/utils/constants";
import CustomSeparator from "./CustomSeparator";
import SidebarProfile from "./SidebarProfile";
import SidebarList from "./SidebarList";
import { SignInTrigger } from "../buttons/SignInTrigger";
import { SignOutTrigger } from "../buttons/SignOutTrigger";

const SidebarInnerContent = ({ user }: { user: AuthUserType | undefined }) => {
  const { toggleSidebar } = useSidebar();

  return (
    <SidebarMenu className="pl-3">
      {!user ? (
        <SignInTrigger
          iconSize="5"
          className="text-primary text-sm"
          onClick={toggleSidebar}
        />
      ) : (
        <SidebarProfile user={user} />
      )}
      <CustomSeparator heading="Quick access" />
      <SidebarList links={quickAccessLinks} />
      {user && (
        <>
          <CustomSeparator heading="Account" />
          <SidebarList links={accountLinks} />
        </>
      )}
      {user && (
        <SignOutTrigger
          onClick={toggleSidebar}
          iconSize="5"
          className="text-primary text-sm"
        />
      )}
    </SidebarMenu>
  );
};

export default SidebarInnerContent;

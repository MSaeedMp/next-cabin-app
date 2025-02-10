import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "../header/Logo";
import CustomTriggerClose from "./CustomTriggerClose";
import SidebarInnerContent from "./SidebarInnerContent";
import { auth } from "@/lib/auth";

const AppSidebar = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <Sidebar
      className="z-50 border-white"
      side="right"
      variant="sidebar"
      collapsible="offcanvas"
    >
      <SidebarContent className="bg-white shadow-lg">
        <SidebarGroup>
          <SidebarGroupLabel className="sm:mb-10 mb-8 mt-4 flex justify-between items-center pl-4">
            <Logo type="blue" />
            <CustomTriggerClose className="p-2 text-foreground" />
          </SidebarGroupLabel>
          <SidebarInnerContent user={user} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
export default AppSidebar;

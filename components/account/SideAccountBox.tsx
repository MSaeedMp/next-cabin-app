import { SignOutTrigger } from "../buttons/SignOutTrigger";
import SideLinkButton from "./SideLinkButton";
import { accountLinks } from "@/utils/constants";

const SideAccountBox = () => (
  <aside className="hidden md:flex md:flex-col h-full rounded-xl gap-1 pt-8 ">
    {accountLinks.map(({ name, href, icon: Icon }) => (
      <SideLinkButton key={name} href={href} className="py-7 gap-4">
        <Icon className="!w-5 !h-5" />
        <span className="text-sm">{name}</span>
      </SideLinkButton>
    ))}
    <SignOutTrigger className="rounded-xl" />
  </aside>
);

export default SideAccountBox;

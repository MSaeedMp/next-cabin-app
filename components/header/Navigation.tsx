import CustomTriggerMenu from "../Global/CustomTriggerMenu";
import { auth } from "@/lib/auth";
import NavigationLinks from "./NavigationLinks";

const Navigation = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      <nav className="hidden md:flex items-center text-white capitalize font-archivo-narrow text-xl font-bold self-stretch gap-4">
        <NavigationLinks user={user} />
      </nav>
      <div className="md:hidden flex">
        <CustomTriggerMenu />
      </div>
    </>
  );
};
export default Navigation;

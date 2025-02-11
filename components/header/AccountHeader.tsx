import { auth } from "@/lib/auth";
import Container from "../layout/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Image from "next/image";

const AccountHeader = async () => {
  const session = await auth();
  const user = session?.user;
  const firstName = user?.name?.split(" ")[0] || "Guest";

  return (
    <header className=" bg-gradient-to-br from-primary via-blue-800 to-blue-700">
      <Container className="relative pb-10 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <Logo type="white" />
          <Navigation />
        </div>
        <div className="flex gap-6">
          <div className="relative sm:w-36 w-28 aspect-square rounded-full">
            <Image
              src={user?.image || "/profile-fallback.png"}
              alt={user?.name || "Guest"}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl font-archivo-narrow">
              Hello {firstName}
            </h1>
            <h4 className="text-white text-sm sm:text-base lg:text-lg font-semibold">
              Welcome to Next Cabin
            </h4>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default AccountHeader;

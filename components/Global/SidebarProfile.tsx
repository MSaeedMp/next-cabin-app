import { AuthUserType } from "@/utils/types";
import Image from "next/image";

const SidebarProfile = ({ user }: { user: AuthUserType }) => {
  const { image, name } = user;

  return (
    <div className="flex items-center mb-3">
      <div className="relative w-12 aspect-square rounded-full overflow-hidden">
        <Image
          src={image || "/profile-fallback.png"}
          alt={name || "user image"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-contain rounded-full"
        />
      </div>
      <p className="text-base px-4 text-primary">
        Hello <span className="font-semibold">{name}</span>, <br />
        <span className="text-sm">Welcome to Next Cabin</span>
      </p>
    </div>
  );
};
export default SidebarProfile;

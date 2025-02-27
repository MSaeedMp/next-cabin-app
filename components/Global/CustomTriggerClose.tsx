"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { IoMdClose } from "react-icons/io";

const CustomTriggerClose = ({ className }: { className: string }) => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className={cn("flex items-center justify-end", className)}
    >
      <IoMdClose className="!w-6 !h-6" />
    </button>
  );
};
export default CustomTriggerClose;

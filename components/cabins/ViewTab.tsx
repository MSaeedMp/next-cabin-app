"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ViewTab = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  let view = searchParams.get("view") || "list";
  if (view !== "list" && view !== "grid") {
    view = "list";
  }

  const handleUpdateUrl = (newView: "list" | "grid") => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("view", newView);
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <Tabs defaultValue={view} value={view} className="w-[120px] hidden md:flex">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger onClick={() => handleUpdateUrl("list")} value="list">
          List
        </TabsTrigger>
        <TabsTrigger onClick={() => handleUpdateUrl("grid")} value="grid">
          Grid
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ViewTab;

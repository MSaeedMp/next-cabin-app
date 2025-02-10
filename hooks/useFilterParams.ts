"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const useFilterParams = (filterType: "cabintype" | "cabinfeature") => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentFilters = decodeURIComponent(searchParams.get("nflt") || "")
    .split(";")
    .filter(Boolean);

  const typeFilters = currentFilters
    .filter((item) => item.startsWith(`${filterType}=`))
    .map((item) => item.replace(`${filterType}=`, ""))
    .map(Number)
    .filter((num) => !isNaN(num));

  const [selectedFilters, setSelectedFilters] = useState<number[]>(typeFilters);

  const updateURL = useDebouncedCallback((updatedFilters: number[]) => {
    const newParams = new URLSearchParams(searchParams.toString());

    const newFilterString = [
      ...currentFilters.filter((item) => !item.startsWith(`${filterType}=`)),
      ...updatedFilters.map((id) => `${filterType}=${id}`),
    ]
      .filter(Boolean)
      .join(";");

    if (newFilterString) {
      newParams.set("nflt", newFilterString);
    } else {
      newParams.delete("nflt");
    }

    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  }, 300); 

  const handleFilterChange = (featureId: number) => {
    let updatedFilters;
    if (selectedFilters.includes(featureId)) {
      updatedFilters = selectedFilters.filter((id) => id !== featureId);
    } else {
      updatedFilters = [...selectedFilters, featureId];
    }
    setSelectedFilters(updatedFilters);
    updateURL(updatedFilters);
  };

  return { selectedFilters, handleFilterChange };
};

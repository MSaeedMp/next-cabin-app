"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HiArrowsUpDown } from "react-icons/hi2";

const sortByOptions = [
  { label: "Price: Low to high", sortBy: "price", order: "asc" },
  { label: "Price: High to low", sortBy: "price", order: "desc" },
  { label: "Capacity: Low to high", sortBy: "capacity", order: "asc" },
  { label: "Capacity: High to low", sortBy: "capacity", order: "desc" },
];

export function SortComboBox() {
  const [open, setOpen] = React.useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get initial values from URL params
  const initialSortBy = searchParams.get("sortBy") ?? "";
  const initialOrder = searchParams.get("order") ?? "";

  const [selectedSort, setSelectedSort] = React.useState({
    sortBy: initialSortBy,
    order: initialOrder,
  });

  // Function to update the URL parameters
  const updateUrl = (sortBy: string, order: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (sortBy) newParams.set("sortBy", sortBy);
    else newParams.delete("sortBy");

    if (order) newParams.set("order", order);
    else newParams.delete("order");

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  const handleSelect = (sortBy: string, order: string) => {
    if (selectedSort.sortBy === sortBy && selectedSort.order === order) {
      // If already selected, reset to default
      setSelectedSort({ sortBy: "", order: "" });
      updateUrl("", "");
    } else {
      setSelectedSort({ sortBy, order });
      updateUrl(sortBy, order);
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[220px] rounded-full"
        >
          <HiArrowsUpDown />

          {selectedSort.sortBy
            ? sortByOptions.find(
                (option) =>
                  option.sortBy === selectedSort.sortBy &&
                  option.order === selectedSort.order
              )?.label
            : "Sort by..."}
          <div className="ml-auto"></div>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-0 rounded-xl overflow-hidden">
        <Command>
          <CommandList>
            <CommandEmpty>No sorting options found.</CommandEmpty>
            <CommandGroup>
              {sortByOptions.map(({ label, sortBy, order }, index) => (
                <CommandItem
                  key={index}
                  onSelect={() => handleSelect(sortBy, order)}
                >
                  {label}
                  <Check
                    className={cn(
                      "ml-auto text-blue-700",
                      selectedSort.sortBy === sortBy &&
                        selectedSort.order === order
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

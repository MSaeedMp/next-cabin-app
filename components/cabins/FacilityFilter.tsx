"use client";

import { cabinFacilities } from "@/utils/feature-mapping";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useFilterParams } from "@/hooks/useFilterParams";

const FacilityFilter = () => {
  const { selectedFilters, handleFilterChange } =
    useFilterParams("cabinfeature");

  return (
    <div className="flex flex-col gap-4 pl-2">
      {cabinFacilities.map(({ id, name }) => (
        <div key={id} className="flex items-center space-x-2">
          <Input
            type="checkbox"
            id={name}
            checked={selectedFilters.includes(id)}
            onChange={() => handleFilterChange(id)}
            className="w-5 h-5 cursor-pointer"
          />
          <Label htmlFor={name} className="text-sm cursor-pointer">
            {name}
          </Label>
        </div>
      ))}
    </div>
  );
};
export default FacilityFilter;

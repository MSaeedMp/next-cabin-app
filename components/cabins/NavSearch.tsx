"use client";
import SelectPeopleAndRooms from "./SelectPeopleAndRooms";
import { useState } from "react";
import { Input } from "../ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { BsHouses } from "react-icons/bs";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { RangePickerWithPopover } from "./RangePickerWithPopover";

const NavSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [people, setPeople] = useState(searchParams.get("people") || "2");
  const [rooms, setRooms] = useState(searchParams.get("rooms") || "1");
  const initialCheckinDate = searchParams.get("checkin");
  const initialCheckoutDate = searchParams.get("checkout");
  const initialDateRange =
    initialCheckinDate && initialCheckoutDate
      ? {
          from: new Date(initialCheckinDate),
          to: new Date(initialCheckoutDate),
        }
      : {
          from: new Date(),
          to: addDays(new Date(), 10),
        };

  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    initialDateRange
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Update local state when people count changes
  const handlePeopleChange = (value: number) => {
    setPeople(value.toString());
  };

  // Update local state when rooms count changes
  const handleRoomsChange = (value: number) => {
    setRooms(value.toString());
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct new URL parameters
    const newParams = new URLSearchParams();
    if (searchQuery) newParams.set("search", searchQuery);
    if (dateRange?.from && dateRange?.to) {
      newParams.set("checkin", dateRange.from.toISOString().split("T")[0]);
      newParams.set("checkout", dateRange.to.toISOString().split("T")[0]);
    }
    if (people) newParams.set("people", people);
    if (rooms) newParams.set("rooms", rooms);

    // Update the URL without reloading the page
    router.replace(`/cabins?${newParams.toString()}`, { scroll: false });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex lg:flex-row flex-col lg:items-center gap-2 p-2 rounded-md bg-brand-400"
    >
      {/* Search Input */}
      <div className="flex items-center relative w-full">
        <BsHouses className="!w-6 !h-6 absolute left-4" />
        <Input
          className="bg-white py-7 w-full !text-base pl-14"
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search Cabin, Country, or City "
        />
      </div>

      {/* Date Picker */}
      <RangePickerWithPopover
        dateRange={dateRange}
        onSetDateRange={setDateRange}
      />

      {/* People & Rooms Selector */}
      <SelectPeopleAndRooms
        onPeopleChange={handlePeopleChange}
        people={people}
        onRoomsChange={handleRoomsChange}
        rooms={rooms}
      />

      {/* Submit Button */}
      <Button className="py-7 px-6 text-base font-bold" type="submit">
        Search
      </Button>
    </form>
  );
};

export default NavSearch;

"use client";

import { Label } from "../ui/label";
import { CustomCountryNameCodeType } from "@/utils/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
import ErrorLabel from "./ErrorLabel";

type SelectCountryNameCodeProps = {
  countries: CustomCountryNameCodeType[];
  defaultValue?: string | null;
};

const SelectCountryNameCode = ({
  countries,
  defaultValue,
}: SelectCountryNameCodeProps) => {
  const defaultCountryIndex = defaultValue
    ? countries.findIndex((country) =>
        defaultValue.startsWith(country.fullCode)
      )
    : 81;
  const defaultPhoneNumber = defaultValue
    ? defaultValue.split(countries[defaultCountryIndex].fullCode)[1]
    : "";

  const [countryIndex, setCountryIndex] = useState<number>(defaultCountryIndex);
  const [phoneNumber, setPhoneNumber] = useState<string>(defaultPhoneNumber);
  const nameOptions = countries.map((c) => c.fullName);
  const countryCode = countries[countryIndex].fullCode;
  const countryName = countries[countryIndex].fullName;
  const paddingLeft = 25 + countryCode.length * 8;
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    setValue("phoneNumber", countryCode + newPhoneNumber);
  };
  const handleCountryChange = (value: string) => {
    setCountryIndex(+value);
  };
  useEffect(() => {
    setValue("phoneNumber", countryCode + phoneNumber);
  }, [countryIndex, phoneNumber, setValue, countryCode]);

  return (
    <div className="w-full">
      <Label htmlFor="phoneNumber">
        <div className="flex items-center gap-1 md:text-base text-sm text-foreground">
          <span>Phone number</span>
        </div>
      </Label>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <Select onValueChange={handleCountryChange}>
          <SelectTrigger className="py-6 rounded-xl text-base lg:w-[300px]">
            <SelectValue placeholder={countryName} />
          </SelectTrigger>
          <SelectContent className="rounded-xl p-2">
            {nameOptions.map((opt, index) => (
              <SelectItem
                className="text-base py-2"
                key={index}
                value={String(index)}
              >
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex justify-center items-center w-full relative">
          <span className="text-base p-2 inline-block rounded-xl absolute left-2 top-[5.5px]">
            {countryCode}
          </span>
          <Input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            style={{ paddingLeft: `${paddingLeft}px` }}
            className="py-6 font-inter !text-base rounded-xl"
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>
      <ErrorLabel name="phoneNumber" errors={errors} />
    </div>
  );
};

export default SelectCountryNameCode;

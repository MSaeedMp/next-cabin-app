"use client";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import ErrorLabel from "./ErrorLabel";
import { cn } from "@/lib/utils";

type FormInputProps = {
  name: string;
  type: string;
  required?: boolean;
  label?: string;
  defaultValue?: string | number | null;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  autocomplete?: string;
  className?: string;
  disablePaste?: boolean;
  hide?: boolean;
  readOnly?: boolean;
};

const FormInput = ({
  name,
  type = "text",
  label,
  defaultValue,
  value,
  placeholder,
  disabled = false,
  required = false,
  autocomplete,
  className,
  disablePaste = false,
  hide = false,
  readOnly = false,
}: FormInputProps) => {
  const {
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  // Used for tracking external changes
  useEffect(() => {
    if (value !== undefined) {
      setValue(name, value);
    }
  }, [value, setValue, name]);

  return (
    <div className={`md:mb-2 mb-1 ${hide ? "hidden" : ""}`}>
      {label && (
        <Label htmlFor={name} className="capitalize md:text-base">
          {label}
        </Label>
      )}
      <Input
        id={name}
        type={type}
        value={value}
        className={cn(
          "py-5 text-sm md:text-base placeholder:text-muted-foreground rounded-xl pl-4",
          className
        )}
        placeholder={placeholder}
        autoComplete={autocomplete}
        {...register(name)}
        disabled={disabled}
        required={required}
        onPaste={disablePaste ? (e) => e.preventDefault() : undefined}
        readOnly={readOnly}
        defaultValue={defaultValue ?? undefined}
      />
      <ErrorLabel name={name} errors={errors} />
    </div>
  );
};

export default FormInput;

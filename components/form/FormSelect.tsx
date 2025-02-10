import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import ErrorLabel from "./ErrorLabel";

type FormSelectProps = {
  name: string;
  label?: string;
  defaultValue?: string | null;
  placeholder?: string;
  options: string[];
  required?: boolean;
};

const FormSelect = ({
  name,
  label,
  placeholder = "Please select an option",
  defaultValue,
  options,
  required = false,
}: FormSelectProps) => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-2 w-full">
      {label && (
        <Label htmlFor={name}>
          <div className="flex items-center gap-1 md:text-base mb-1 md:mb-0 text-foreground">
            <span>{label}</span>
            {required && <span className="text-red-500 text-lg">*</span>}
          </div>
        </Label>
      )}
      <Select onValueChange={(value) => setValue(name, value)}>
        <SelectTrigger
          id={name}
          aria-label={label || name}
          className="rounded-xl py-6 px-4 text-base"
        >
          <SelectValue
            className="text-muted-foreground"
            placeholder={defaultValue || placeholder}
          />
        </SelectTrigger>
        <SelectContent className="rounded-xl p-2">
          {options.map((opt, index) => (
            <SelectItem className="text-base py-2" key={index} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <ErrorLabel errors={errors} name={name} />
    </div>
  );
};

export default FormSelect;

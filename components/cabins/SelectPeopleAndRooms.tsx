import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StepperInput from "../form/StepperInput";
import { LuUsersRound } from "react-icons/lu";

type SelectPeopleAndRoomsProps = {
  onPeopleChange: (value: number) => void;
  onRoomsChange: (value: number) => void;
  people: string;
  rooms: string;
};
const SelectPeopleAndRooms = ({
  onPeopleChange,
  people,
  onRoomsChange,
  rooms,
}: SelectPeopleAndRoomsProps) => {
  return (
    <Select>
      <SelectTrigger className=" bg-white lg:w-[540px] w-full py-7 !text-base flex justify-start">
        <LuUsersRound className="w-6 h-6 mr-4" />
        <SelectValue
          placeholder={`${people} ${
            people === "1" ? "Person" : "People"
          } . ${rooms} ${rooms === "1" ? "Room" : "Rooms"}`}
        />
        <div className="ml-auto"></div>
      </SelectTrigger>
      <SelectContent className="min-w-[350px] p-4">
        <div className="flex flex-col gap-4">
          <StepperInput
            min={1}
            max={20}
            defaultValue={Number(people)}
            labelText="People"
            onChange={onPeopleChange}
          />
          <StepperInput
            min={1}
            max={10}
            defaultValue={Number(rooms)}
            labelText="Rooms"
            onChange={onRoomsChange}
          />
        </div>
      </SelectContent>
    </Select>
  );
};
export default SelectPeopleAndRooms;

import { formatCurrency } from "@/utils/helper";

const CabinCardDetails = ({
  price,
  capacity,
  view,
  numRooms,
}: {
  price: number;
  capacity: number;
  numRooms: number;
  view?: "list" | "grid";
}) => {
  if (view === "list")
    return (
      <div className="flex flex-col items-end">
        <p className="text-muted-foreground text-sm">{numRooms} rooms</p>
        <p className="text-muted-foreground text-sm">
          1 night, {capacity} adults
        </p>
        <p className="text-primary font-bold">{formatCurrency(price)}</p>
        <p className="text-muted-foreground text-sm">
          Including taxes and fees
        </p>
      </div>
    );

  if (view === "grid")
    return (
      <div className="flex flex-col">
        <p className="text-muted-foreground text-sm">Rooms: {numRooms}</p>
        <p className="text-muted-foreground text-sm">
          1 night, {capacity} adults
        </p>
        <p className="text-primary font-bold">{formatCurrency(price)}</p>
        <p className="text-muted-foreground text-sm">
          Including taxes and fees
        </p>
      </div>
    );
};
export default CabinCardDetails;

import { formatCurrency } from "@/utils/helper";

const CabinCardPrice = ({
  regularPrice,
  discount,
}: {
  regularPrice: number;
  discount: number;
}) => {
  return (
    <div className="flex items-center gap-3">
      <span className="">{formatCurrency(regularPrice)}</span>
      <span className="text-red-600 line-through text-sm">
        {formatCurrency(discount)}
      </span>
    </div>
  );
};
export default CabinCardPrice;

import { formatCurrency } from "@/utils/helper";

const CabinCardPrice = ({
  regularPriceNum,
  discountNum,
}: {
  regularPriceNum: number;
  discountNum: number;
}) => {
  return (
    <div className="flex items-center gap-3">
      <span className="">{formatCurrency(discountNum)}</span>
      <span className="text-red-600 line-through text-sm">
        {formatCurrency(regularPriceNum)}
      </span>
    </div>
  );
};
export default CabinCardPrice;

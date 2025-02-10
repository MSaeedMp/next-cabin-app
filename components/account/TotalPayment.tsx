import { formatCurrency } from "@/utils/helper";

const TotalPayment = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <div className="flex flex-col items-end">
      <p className="text-muted-foreground text-sm">Total payment</p>
      <p className="text-primary font-bold">{formatCurrency(totalPrice)}</p>
      <p className="text-muted-foreground text-sm">Including taxes and fees</p>
    </div>
  );
};
export default TotalPayment;

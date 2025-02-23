const DiscountTag = ({
  discountPercentage,
}: {
  discountPercentage: string;
}) => {
  return (
    <div className="bg-green-600 p-2 text-sm text-white font-semibold whitespace-nowrap">
      <span>{discountPercentage}% Discount</span>
    </div>
  );
};
export default DiscountTag;

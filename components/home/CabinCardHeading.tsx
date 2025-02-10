const CabinCardHeading = ({ heading }: { heading: string }) => {
  return (
    <h3 className="text-sm sm:text-base capitalize font-bold whitespace-normal">
      {heading}
    </h3>
  );
};
export default CabinCardHeading;

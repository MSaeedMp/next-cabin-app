import EmptyCard from "./EmptyCard";

const EmptyScrollList = () => {
  return (
    <div className="flex gap-4 p-4 bg-white shadow-xl overflow-x-scroll">
      {Array.from({ length: 5 }, (_, i) => {
        return <EmptyCard key={i} />;
      })}
    </div>
  );
};
export default EmptyScrollList;

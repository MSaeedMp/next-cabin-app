import LoadingCard from "./LoadingCard";

const LoadingScrollArea = () => {
  return (
    <div className="flex w-max space-x-2 sm:space-x-4 py-6 sm:px-6">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="w-44 sm:w-64">
          <LoadingCard />
        </div>
      ))}
    </div>
  );
};

export default LoadingScrollArea;

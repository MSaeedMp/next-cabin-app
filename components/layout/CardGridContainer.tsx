import React from "react";
import EmptyList from "../Global/EmptyList";

interface CardGridContainerWithFetchProps<T> {
  fetchFcn: () => Promise<T[]>;
  children: React.ReactNode;
  itemPropName: string;
}

const CardGridContainerWithFetch = async <T,>({
  fetchFcn,
  children,
  itemPropName,
}: CardGridContainerWithFetchProps<T>) => {
  const items = await fetchFcn();
  if (items.length === 0)
    return <EmptyList heading="Sorry, but there is no promoted cabin." />;

  return (
    <div className="pt-12 grid gap-3 lg:gap-4 xl:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => (
        <div key={index}>
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, { [itemPropName]: item })
              : child
          )}
        </div>
      ))}
    </div>
  );
};

export default CardGridContainerWithFetch;

import React from "react";
import EmptyScrollList from "./EmptyScrollList";

type ScrollListWithFetchProps<T> = {
  fetchFcn: () => Promise<T[]>;
  children: React.ReactNode;
  itemPropName: string;
};

type ChildProps<T> = {
  item: T;
};

const ScrollListWithFetch = async <T,>({
  fetchFcn,
  children,
  itemPropName,
}: ScrollListWithFetchProps<T>) => {
  const items = await fetchFcn();
  if (items.length === 0) return <EmptyScrollList />;

  return (
    <div className="flex w-max space-x-2 sm:space-x-4 py-6 sm:px-6">
      {items.map((item, index) => (
        <div className="w-48 sm:w-64" key={index}>
          {React.Children.map(children, (child) =>
            React.isValidElement<ChildProps<T>>(child)
              ? React.cloneElement(child, { [itemPropName]: item })
              : child
          )}
        </div>
      ))}
    </div>
  );
};

export default ScrollListWithFetch;

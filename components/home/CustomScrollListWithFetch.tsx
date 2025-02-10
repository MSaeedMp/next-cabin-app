"use server";

import React from "react";
import EmptyScrollList from "../Global/EmptyScrollList";

type CustomScrollListProps<T> = {
  fetchFcn: () => Promise<T[]>;
  children: React.ReactNode;
  itemPropName: string;
};

type ChildProps<T> = {
  item: T;
};

const CustomScrollListWithFetch = async <T,>({
  fetchFcn,
  children,
  itemPropName,
}: CustomScrollListProps<T>) => {
  const items = await fetchFcn();
  if (items.length === 0) return <EmptyScrollList />;

  return (
    <div className="flex w-max space-x-2 sm:space-x-4 py-6 sm:px-6">
      {items.map((item, index) => (
        <div
          className={
            index === 0 ? "w-[340px] sm:w-[450px] md:w-[638px]" : "w-44 sm:w-64"
          }
          key={index}
        >
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

export default CustomScrollListWithFetch;

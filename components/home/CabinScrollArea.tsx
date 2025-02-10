import { Cabin } from "@prisma/client";
import EmptyScrollArea from "../Global/EmptyScrollList";
import React from "react";

type CabinChildProps = {
  cabin: Cabin;
};

const CabinScrollArea = async ({
  fetchFcn,
  children,
}: {
  fetchFcn: () => Promise<Cabin[]>;
  children: React.ReactNode;
}) => {
  const cabins = await fetchFcn();

  if (cabins.length === 0) return <EmptyScrollArea />;

  return (
    <div className="flex w-max space-x-2 sm:space-x-4 py-6 sm:px-6">
      {cabins.map((cabin) => (
        <div className="w-44 sm:w-64" key={cabin.id}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement<CabinChildProps>(child)) {
              return React.cloneElement(child, { cabin });
            }
            return child;
          })}
        </div>
      ))}
    </div>
  );
};

export default CabinScrollArea;

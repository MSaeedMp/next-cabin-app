import Image from "next/image";
import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { rewards } from "@/utils/constants";

const RewardsScrollList = () => {
  return (
    <div className="flex w-max space-x-2 sm:space-x-4 py-6 sm:px-6">
      {rewards.map((reward, index) => (
        <Card key={index} className="w-28 sm:w-44 border-none rounded-md p-4">
          <CardContent className="p-0">
            <div className="relative w-[70%] aspect-square mx-auto">
              <Image
                src={reward.image}
                alt={reward.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <CardFooter className="flex justify-center mt-7 text-muted-foreground p-0">
              <h5 className="whitespace-normal text-sm font-bold">
                {reward.title}
              </h5>
            </CardFooter>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default RewardsScrollList;

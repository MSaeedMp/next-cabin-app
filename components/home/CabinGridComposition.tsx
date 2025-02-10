import { cn } from "@/lib/utils";
import Image from "next/image";

const CabinComposiotin = () => {
  return (
    <div className="grid gird-cols-1 grid-rows-5 md:grid-cols-6 md:grid-rows-2 gap-2">
      {Array.from({ length: 5 }, (_, index) => {
        return (
          <div
            key={index}
            className={cn(
              "relative h-52 sm:h-64 w-full",
              index === 0 || index === 1 ? "col-span-3" : "col-span-3 md:col-span-2"
            )}
          >
            <Image
              src="/test.jpg"
              alt="image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-stone-400 rounded-md opacity-10"></div>
            <div className="absolute top-4 left-4 text-white font-bold text-2xl sm:text-3xl flex items-center gap-2">
              <span>Germany</span>
              <span></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CabinComposiotin;

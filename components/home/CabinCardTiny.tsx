import Link from "next/link";

import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Cabin } from "@prisma/client";

const CabinCardTiny = ({ cabin }: { cabin: Cabin }) => {
  const { image, id, name } = cabin;

  return (
    <article className="group relative ">
      <Link href={`/cabins/${id}`}>
        <Card className="rounded-sm p-0 border-none shadow-none">
          <CardContent className="p-0">
            <div className="relative w-full lg:h-44 h-32 lg:aspect-square rounded-md overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
                className="object-cover transform group-hover:scale-110 duration-300 rounded-md"
              />
            </div>
            <div className="p-2">
              <h3 className="capitalize text-sm whitespace-normal">{name}</h3>
            </div>
          </CardContent>
        </Card>
      </Link>
    </article>
  );
};
export default CabinCardTiny;

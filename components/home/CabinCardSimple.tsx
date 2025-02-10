import Link from "next/link";

import { Card, CardContent } from "../ui/card";
import CabinCardImage from "./CabinCardImage";
import CabinCardMainHeadnig from "./CabinCardHeading";
import { Cabin } from "@prisma/client";
import EmptyCard from "../Global/EmptyCard";

const CabinCardSimple = ({ cabin }: { cabin?: Cabin }) => {
  if (!cabin) return <EmptyCard />;
  const { id, image, name } = cabin;

  return (
    <article className="group relative w-44 sm:w-64">
      <Link href={`/cabins/${id}`}>
        <Card className="transform duration-500 rounded-lg overflow-hidden p-0 border-none shadow-none">
          <CardContent className="p-0">
            <CabinCardImage image={image} alt={name} />
            <div className="pt-2">
              <CabinCardMainHeadnig heading={name} />
            </div>
          </CardContent>
        </Card>
      </Link>
    </article>
  );
};
export default CabinCardSimple;

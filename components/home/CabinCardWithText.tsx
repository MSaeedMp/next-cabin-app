import Link from "next/link";

import { Card, CardContent } from "../ui/card";
import CabinCardImage from "./CabinCardImage";
import EmptyCard from "../Global/EmptyCard";
import { Cabin } from "@prisma/client";
import CabinCardHeading from "./CabinCardHeading";
import CabinCardDescription from "./CabinCardDescription";

const CabinCardWithText = ({ cabin }: { cabin?: Cabin }) => {
  if (!cabin) return <EmptyCard />;
  const { id, image, name, description } = cabin;

  return (
    <article className="group relative">
      <Link href={`/cabins/${id}`}>
        <Card className="transform duration-500 rounded-lg overflow-hidden p-0 border-none shadow-none">
          <CardContent className="p-0">
            <CabinCardImage image={image} alt={name} />
            <div className="pt-2">
              <CabinCardHeading heading={name} />
              <CabinCardDescription heading={description} />
            </div>
          </CardContent>
        </Card>
      </Link>
    </article>
  );
};
export default CabinCardWithText;

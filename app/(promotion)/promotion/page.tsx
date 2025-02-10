import { fetchPromotedCabins } from "@/actions/cabin-action";
import LoadingCard from "@/components/Global/LoadingCard";
import SectionSubTitle from "@/components/Global/SectionSubTitle";
import SectionTitle from "@/components/Global/SectionTitle";
import CardGridContainerWithFetch from "@/components/layout/CardGridContainer";
import Container from "@/components/layout/Container";
import PromotedCabinCard from "@/components/promotion/PromotedCabinCard";
import { Suspense } from "react";

const PromotionPage = async () => {
  return (
    <Container>
      <SectionTitle className="mt-10 mb-4">Promoted cabins</SectionTitle>
      <SectionSubTitle>
        Explored promoted cabins with special prices.
      </SectionSubTitle>
      <Suspense
        fallback={
          <div className="grid gap-3 lg:gap-4 xl:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
            {Array.from({ length: 10 }, (_, i) => (
              <LoadingCard key={i}></LoadingCard>
            ))}
          </div>
        }
      >
        <CardGridContainerWithFetch
          itemPropName="cabin"
          fetchFcn={() => fetchPromotedCabins()}
        >
          <PromotedCabinCard />
        </CardGridContainerWithFetch>
      </Suspense>
    </Container>
  );
};
export default PromotionPage;

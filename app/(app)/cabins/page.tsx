import Container from "@/components/layout/Container";
import SideFilterBox from "@/components/cabins/SideFilterBox";
import { CabinSearchParamsType } from "@/utils/types";
import ViewTab from "@/components/cabins/ViewTab";
import { SortComboBox } from "@/components/cabins/SortCombobox";
import { Suspense } from "react";
import LoadingListCard from "@/components/Global/LoadingListCard";
import LoadingGridCard from "@/components/Global/LoadingGridCard";
import CabinsBox from "@/components/cabins/CabinsBox";

const CabinsPage = async ({
  searchParams,
}: {
  searchParams: Promise<CabinSearchParamsType>;
}) => {
  const queryObject: CabinSearchParamsType = await searchParams;

  return (
    <Container>
      <div className="grid md:grid-cols-[.9fr_3fr] md:pt-16 sm:pt-12 pt-8">
        <SideFilterBox />
        <div className="flex flex-col px-0 md:px-4 py-6">
          <aside className="flex justify-between items-center gap-4 mb-4">
            <SortComboBox />
            <ViewTab />
          </aside>
          <Suspense
            fallback={
              queryObject.view === "grid" ? (
                <LoadingGridCard />
              ) : (
                <LoadingListCard />
              )
            }
          >
            <CabinsBox queryObject={queryObject} />
          </Suspense>
        </div>
      </div>
    </Container>
  );
};
export default CabinsPage;

import Container from "@/components/layout/Container";
import BreadCrumpContainer from "@/components/single-cabin/BreadCrumpContainer";
import CabinReservation from "@/components/single-cabin/CabinReservation";
import SingleCabinContainer from "@/components/single-cabin/SingleCabinContainer";
import SingleCabinDescription from "@/components/single-cabin/SingleCabinDescription";
import SingleCabinFeatures from "@/components/single-cabin/SingleCabinFacilities";
import SingleCabinHeading from "@/components/single-cabin/SingleCabinHeading";
import SectionSubTitle from "@/components/Global/SectionSubTitle";
import SectionTitle from "@/components/Global/SectionTitle";
import CabinReviews from "@/components/single-cabin/CabinReviews";
import NotFound from "@/components/Global/NotFound";
import { fetchCabinById } from "@/actions/cabin-action";
import { Separator } from "@/components/ui/separator";

const SingleCabinPage = async ({
  params,
}: {
  params: Promise<{ cabinId: string }>;
}) => {
  const cabinId = (await params).cabinId;
  const cabin = await fetchCabinById(cabinId);
  if (!cabin)
    return (
      <NotFound
        heading="Cabin not found."
        subHeading="The cabin you are looking for does not exist or has been moved."
        returnMsg="You can return to the cabins page"
        returnLink="/cabins"
      />
    );

  const {
    image,
    description,
    country,
    city,
    features,
    maxCapacity,
    regularPrice,
    name,
    numRooms,
    cabinType,
    discount,
    longitude,
    latitude,
  } = cabin;

  return (
    <Container>
      <div className="flex flex-col gap-4 pt-10">
        <BreadCrumpContainer name={name} />
        <SingleCabinHeading
          name={name}
          country={country}
          city={city}
          cabinId={cabinId}
        />
        <SingleCabinContainer
          center={[latitude.toNumber(), longitude.toNumber()]}
          name={name}
          image={image}
        />
        <SingleCabinFeatures features={features} />
        <SingleCabinDescription description={description} />
        <Separator className="my-6" />
        <SectionTitle>Reserve cabin</SectionTitle>
        <SectionSubTitle>
          Check the availibility of the cabin and reserve it
        </SectionSubTitle>
        <CabinReservation
          cabinId={cabinId}
          name={name}
          description={description}
          features={features}
          maxCapacity={maxCapacity}
          cabinType={cabinType}
          discount={Number(discount)}
          regularPrice={Number(regularPrice)}
          numRooms={numRooms}
        />
        <Separator className="my-6" />
        <SectionTitle>Reviews</SectionTitle>
        <SectionSubTitle>
          Check our customers reviews about{" "}
          <span className="text-primary">{name}</span>
        </SectionSubTitle>
        <CabinReviews cabinId={cabinId} />
      </div>
    </Container>
  );
};
export default SingleCabinPage;

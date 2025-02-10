import CabinCard from "@/components/home/CabinCard";
import CabinCardReversed from "@/components/home/CabinCardReversed";
import CabinCardSimple from "@/components/home/CabinCardSimple";
import CabinCardWithText from "@/components/home/CabinCardWithText";
import SectionSubTitle from "@/components/Global/SectionSubTitle";
import SectionTitle from "@/components/Global/SectionTitle";
import Container from "@/components/layout/Container";
import WideCard from "@/components/promotion/WideCard";
import CabinCompositionRow from "@/components/home/CabinCompositionRow";
import ScrollBox from "@/components/Global/ScrollBox";
import CustomScrollListWithFetch from "@/components/home/CustomScrollListWithFetch";
import ScrollListWithFetch from "@/components/Global/ScrollListWithFetch";
import { fetchCabinByType } from "@/actions/cabin-action";

const HomePage = () => {
  return (
    <Container>
      <SectionTitle className="mt-10 mb-4">Beach Cabins</SectionTitle>
      <SectionSubTitle>Find cabins close to beach</SectionSubTitle>
      <ScrollBox>
        <ScrollListWithFetch
          itemPropName="cabin"
          fetchFcn={() => fetchCabinByType("BEACH")}
        >
          <CabinCard />
        </ScrollListWithFetch>
      </ScrollBox>

      <SectionTitle className="mt-10 mb-4">Offers</SectionTitle>
      <SectionSubTitle className="mb-4">
        Promotions, discounts, and special offers for you
      </SectionSubTitle>
      <WideCard
        heading="Save on stays world wide"
        subHeading="Start the year with a spirit of adventure and save at least 15% with offers at the beginning of 2025."
        buttonText="Save at least 15%"
        to="/promotion"
        imageSrc="/gift.png"
        imageAlt="Special offer"
      />

      <SectionTitle className="mt-10 mb-4">Ski & Snow Cabins</SectionTitle>
      <SectionSubTitle className="mb-4">
        Cabins pefrect for snow adventures
      </SectionSubTitle>
      <ScrollBox>
        <ScrollListWithFetch
          itemPropName="cabin"
          fetchFcn={() => fetchCabinByType("SKI")}
        >
          <CabinCardReversed />
        </ScrollListWithFetch>
      </ScrollBox>
      <SectionTitle className="mt-10 mb-4">Outdoor Cabins</SectionTitle>
      <SectionSubTitle className="mb-4">
        Cabins in peaceful locations far from cities
      </SectionSubTitle>
      <ScrollBox>
        <CustomScrollListWithFetch
          itemPropName="cabin"
          fetchFcn={() => fetchCabinByType("OUTDOOR")}
        >
          <CabinCardWithText />
        </CustomScrollListWithFetch>
      </ScrollBox>
      <SectionTitle className="mt-10 mb-4">Popular cabins</SectionTitle>
      <SectionSubTitle className="mb-4">
        Discover cabins in any location around the world
      </SectionSubTitle>
      <CabinCompositionRow />

      <SectionTitle className="mt-10 mb-4">
        Cabins with Special Foods
      </SectionTitle>
      <SectionSubTitle>Discover cabins known for their foods</SectionSubTitle>
      <ScrollBox>
        <ScrollListWithFetch
          itemPropName="cabin"
          fetchFcn={() => fetchCabinByType("EAT")}
        >
          <CabinCard includePrice={true} />
        </ScrollListWithFetch>
      </ScrollBox>

      <SectionTitle className="mt-10 mb-4">Promotions </SectionTitle>
      <SectionSubTitle className="mb-4">
        Unlock member-only discounts, special offers, and more
      </SectionSubTitle>
      <WideCard
        heading="Sign up and save money"
        subHeading="Join us to benefit from our special offers"
        buttonText="Register now"
        to="/auth/signup"
        imageSrc="/teamwork.png"
        imageAlt="Join us image"
      />

      <SectionTitle className="mt-10 mb-4">City cabins</SectionTitle>
      <SectionSubTitle>Find cabins in city neighborhoods</SectionSubTitle>

      <ScrollBox>
        <ScrollListWithFetch
          itemPropName="cabin"
          fetchFcn={() => fetchCabinByType("CITY")}
        >
          <CabinCard includePrice={true} />
        </ScrollListWithFetch>
      </ScrollBox>

      <SectionTitle className="mt-10 mb-4">
        Cabins for special events
      </SectionTitle>
      <SectionSubTitle>
        Enjoy your lovely moments in these cabins
      </SectionSubTitle>
      <ScrollBox>
        <ScrollListWithFetch
          itemPropName="cabin"
          fetchFcn={() => fetchCabinByType("ROMANCE")}
        >
          <CabinCardSimple />
        </ScrollListWithFetch>
      </ScrollBox>

      <SectionTitle className="mt-10 mb-4">Cabins to relax</SectionTitle>
      <SectionSubTitle>
        Escape stress and unwind in our tranquil cabins{" "}
      </SectionSubTitle>
      <ScrollBox>
        <ScrollListWithFetch
          itemPropName="cabin"
          fetchFcn={() => fetchCabinByType("RELAXATION")}
        >
          <CabinCardSimple />
        </ScrollListWithFetch>
      </ScrollBox>
    </Container>
  );
};
export default HomePage;

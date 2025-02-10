import Container from "../layout/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavSearch from "../cabins/NavSearch";

const PromotionHeader = () => {
  return (
    <header className="bg-gradient-to-br from-lime-600 via-green-600 to-green-700">
      <Container className="relative pb-20">
        <div className="flex justify-between items-center">
          <Logo type="white" />
          <Navigation />
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <h1
            className={
              "sm:text-7xl text-5xl font-bold font-archivo-narrow text-white"
            }
            style={{ textShadow: "0 0 20px rgba(0, 0, 0, .1)" }}
          >
            Discover Your Dream Cabin Retreat{" "}
          </h1>
          <h3 className="text-xl sm:text-2xl max-w-[300px] md:max-w-[650px] font-[400] text-white font-archivo-narrow">
            Explore a curated collection of stunning cabins where luxury meets
            nature. Find your perfect getaway and make unforgettable memories.
          </h3>
        </div>
        <div className=" mt-20">
          <NavSearch />
        </div>
      </Container>
    </header>
  );
};
export default PromotionHeader;

import Container from "../layout/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavSearch from "../cabins/NavSearch";

const HomeHeader = () => {
  return (
    <header className="bg-gradient-to-br from-primary via-blue-800 to-blue-700">
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
            Welcome to Next Cabin
          </h1>
          <h3 className="text-xl sm:text-2xl max-w-[300px] md:max-w-[650px] font-[400] text-white font-archivo-narrow">
            Find a selection of breathtaking cabins where comfort meets
            wilderness. Find your perfect escape and create memories that last a
            lifetime.
          </h3>
        </div>
        <div className=" mt-20">
          <NavSearch />
        </div>
      </Container>
    </header>
  );
};
export default HomeHeader;

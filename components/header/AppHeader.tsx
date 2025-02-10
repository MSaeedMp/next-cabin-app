import Container from "../layout/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavSearch from "../cabins/NavSearch";

const AppHeader = () => {
  return (
    <header className=" bg-gradient-to-br from-primary via-blue-800 to-blue-700">
      <Container className="relative pb-10 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <Logo type="white" />
          <Navigation />
        </div>
        <h2 className="text-white font-semibold text-2xl font-archivo-narrow">Find your favorite cabin here</h2>
        <div>
          <NavSearch />
        </div>
      </Container>
    </header>
  );
};
export default AppHeader;

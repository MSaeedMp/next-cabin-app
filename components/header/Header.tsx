import Container from "../layout/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavSearch from "../cabins/NavSearch";
import { Suspense } from "react";

type HeaderProps = {
  title?: string;
  subtitle?: string;
  bgGradient: string;
};

const Header = ({ title, subtitle, bgGradient }: HeaderProps) => {
  return (
    <header className={bgGradient}>
      <Container className="relative pb-16">
        <div className="flex justify-between items-center">
          <Logo type="white" />
          <Navigation />
        </div>
        <div className="flex flex-col gap-4 mt-7">
          {title && (
            <h1
              className="sm:text-7xl text-5xl font-bold font-archivo-narrow text-white"
              style={{ textShadow: "0 0 20px rgba(0, 0, 0, .1)" }}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <h3 className="text-xl sm:text-2xl max-w-[300px] md:max-w-[700px] font-[400] text-white font-archivo-narrow">
              {subtitle}
            </h3>
          )}
        </div>
        <div className="mt-10">
          <Suspense>
            <NavSearch />
          </Suspense>
        </div>
      </Container>
    </header>
  );
};

export default Header;

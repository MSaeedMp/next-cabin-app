import Footer from "@/components/footer/Footer";
import HomeHeader from "@/components/header/HomeHeader";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default HomeLayout;

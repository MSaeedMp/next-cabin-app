import Footer from "@/components/footer/Footer";
import HomeHeader from "@/components/header/HomeHeader";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <HomeHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default HomeLayout;

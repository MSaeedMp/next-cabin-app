import Footer from "@/components/footer/Footer";
import PromotionHeader from "@/components/header/PromotionHeader";

const PromotionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PromotionHeader />
      <main>{children}</main>
      <Footer bgColor="bg-gradient-to-br from-lime-600 via-green-600 to-green-700" />
    </>
  );
};
export default PromotionLayout;

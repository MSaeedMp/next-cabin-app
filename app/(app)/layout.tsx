import Footer from "@/components/footer/Footer";
import AppHeader from "@/components/header/AppHeader";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default AppLayout;

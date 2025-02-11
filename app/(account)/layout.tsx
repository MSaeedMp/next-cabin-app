import SideAccountBox from "@/components/account/SideAccountBox";
import Footer from "@/components/footer/Footer";
import AccountHeader from "@/components/header/AccountHeader";
import Container from "@/components/layout/Container";

const AccountLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <AccountHeader />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-x-6">
          <SideAccountBox />
          <main className="w-full overflow-hidden min-h-[calc(100vh-10rem)]">{children}</main>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default AccountLayout;

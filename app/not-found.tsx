import Footer from "@/components/footer/Footer";
import NotFound from "@/components/Global/NotFound";
import AppHeader from "@/components/header/AppHeader";
import Container from "@/components/layout/Container";

const NotFoundPage = () => {
  return (
    <>
      <AppHeader />
      <Container>
        <NotFound
          heading="Page not found."
          subHeading="The page you are looking for does not exist or has been moved."
          returnMsg="You can return to the home page"
          returnLink="/"
        />
      </Container>
      <Footer />
    </>
  );
};
export default NotFoundPage;

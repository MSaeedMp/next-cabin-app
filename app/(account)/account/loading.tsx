import Spinner from "@/components/Global/Spinner";
import Container from "@/components/layout/Container";

const Loading = () => {
  return (
    <Container>
      <div className="lg:pt-32 pt-20">
        <Spinner />
      </div>
    </Container>
  );
};
export default Loading;

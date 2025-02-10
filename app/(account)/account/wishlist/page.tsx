import FavoriteCabinList from "@/components/favorite/FavoriteCabinList";
import SectionSubTitle from "@/components/Global/SectionSubTitle";
import SectionTitle from "@/components/Global/SectionTitle";

const WishlistPage = () => {
  return (
    <>
      <SectionTitle className="mt-10 mb-4">Your Favorite Cabins</SectionTitle>
      <SectionSubTitle className="mb-6">Find your favorite cabins here</SectionSubTitle>
      <FavoriteCabinList />
    </>
  );
};
export default WishlistPage;

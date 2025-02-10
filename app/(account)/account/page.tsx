import RewardsScrollList from "@/components/account/RewardsScrollList";
import SectionSubTitle from "@/components/Global/SectionSubTitle";
import SectionTitle from "@/components/Global/SectionTitle";
import ScrollBox from "@/components/Global/ScrollBox";
import WideCard from "@/components/promotion/WideCard";

const AccountPage = () => {
  return (
    <>
      <SectionTitle className="mt-10 mb-4">
        You will have these rewards upon reservation
      </SectionTitle>
      <SectionSubTitle>
        Benefit from rewards and discounts on selected stays and rental cars
        worldwide.
      </SectionSubTitle>
      <ScrollBox>
        <RewardsScrollList />
      </ScrollBox>
      <WideCard
        heading="Complete your profile"
        subHeading="Complete your profile and use this information on your next booking."
        buttonText="Complete now"
        to="/account/profile"
        imageSrc="/profile.png"
        imageAlt="Complete profile"
        className="mt-4"
      />
    </>
  );
};
export default AccountPage;

import { findUserById } from "@/actions/user-action";
import { getCountriesNameCode } from "@/actions/util-action";
import UpdateProfileForm from "@/components/account/UpdateProfileForm";
import SectionSubTitle from "@/components/Global/SectionSubTitle";
import SectionTitle from "@/components/Global/SectionTitle";
import { auth } from "@/lib/auth";
import { CustomCountryNameCodeType } from "@/utils/types";

export const generateMetadata = () => {
  return { title: "Profile" };
};

const ProfilePage = async () => {
  const countries: CustomCountryNameCodeType[] = await getCountriesNameCode();
  const session = await auth();
  const user = session?.user;
  if (!user?.userId) throw new Error("You are not logged in");

  const userOnDB = await findUserById(user.userId);
  if (!userOnDB) throw new Error("User was not found");

  return (
    <>
      <SectionTitle className="mt-10 mb-4">Update your profile</SectionTitle>
      <SectionSubTitle>
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </SectionSubTitle>
      <UpdateProfileForm countries={countries} user={userOnDB} />
    </>
  );
};
export default ProfilePage;

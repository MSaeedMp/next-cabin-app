"use client";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { CustomCountryNameCodeType } from "@/utils/types";
import SelectCountryNameCode from "../form/SelectCountryNameCode";
import FormSelect from "../form/FormSelect";
import { updateUserProfileAction } from "@/actions/user-action";
import { User } from "@prisma/client";
import { SubmitButton } from "../buttons/SubmitButton";

const UpdateProfileForm = ({
  countries,
  user,
}: {
  countries: CustomCountryNameCodeType[];
  user: User;
}) => {
  return (
    <FormContainer
      action={updateUserProfileAction}
      schemaName="updateProfileSchema"
      className="grid xl:grid-cols-2 grid-cols-1 gap-x-4 mt-10 px-4 lg:px-6 py-6"
    >
      <FormInput
        name="name"
        type="text"
        label="Full name"
        defaultValue={user.name}
      />
      <FormInput
        name="displayName"
        type="text"
        label="Display name"
        defaultValue={user.displayName}
      />
      <FormInput
        name="email"
        type="email"
        label="Email"
        defaultValue={user.email}
        disabled
      />
      <FormSelect
        name="nationality"
        label="Nationality"
        placeholder="Please select"
        defaultValue={user.nationality}
        options={countries.map((c) => c.fullName)}
      />
      {/* <div className="lg:col-span-2"> */}
      <SelectCountryNameCode
        defaultValue={user.phoneNumber}
        countries={countries}
      />
      {/* </div> */}
      <FormInput
        name="nationalId"
        type="text"
        label="National ID"
        defaultValue={user.nationalId}
      />
      <FormInput
        name="address"
        type="text"
        label="Address"
        defaultValue={user.address}
      />
      <div className="flex justify-end self-end">
        <SubmitButton text="Update profile" />
      </div>
    </FormContainer>
  );
};

export default UpdateProfileForm;

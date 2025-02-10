"use client";
import FormContainer from "../form/FormContainer";
import FormInput from "../form/FormInput";
import TextAreaInput from "../form/TextAreaInput";
import RatingSelect from "./RatingSelect";
import { faker } from "@faker-js/faker";
import { createReviewAction } from "@/actions/review-action";
import { SubmitButton } from "../buttons/SubmitButton";
import { AuthUserType } from "@/utils/types";
import LinkButton from "../buttons/LinkButton";

const ReviewForm = ({
  cabinId,
  user,
}: {
  cabinId: string;
  user: AuthUserType | undefined;
}) => {
  const title = faker.company.catchPhrase();
  const comment = faker.commerce.productDescription();

  return (
    <div className="md:p-10 p-6 sm:p-8 border border-stone-200 shadow-sm rounded-xl bg-white">
      <h3 className="text-2xl sm:text-3xl  font-semibold pb-6 font-archivo-narrow text-primary">
        Leave a Review for This Cabin{" "}
      </h3>
      <FormContainer action={createReviewAction} schemaName="reviewSchema">
        <div className="flex flex-col gap-0">
          <div className="w-full">
            <FormInput
              name="title"
              type="text"
              label="Title"
              placeholder="Review title"
              defaultValue={title}
            />
          </div>
          <div className="w-full">
            <RatingSelect name="rating" label="Rating" className="mb-8" />
          </div>
        </div>
        <TextAreaInput
          name="comment"
          labelText="Feedback"
          defaultValue={comment}
        />
        <FormInput type="hidden" name="cabinId" value={cabinId} hide={true} />
        <div className="flex justify-end">
          {user ? (
            <SubmitButton text="Submit review" />
          ) : (
            <LinkButton
              text="Login to review"
              to="/api/auth/signin"
            ></LinkButton>
          )}
        </div>
      </FormContainer>
    </div>
  );
};
export default ReviewForm;

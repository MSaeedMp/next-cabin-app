import FormContainer from "@/components/form/FormContainer";
import QuickAccessSeparator from "@/components/form/QuickAccessSeparator";
import Grid2Cols from "@/components/layout/Grid2Cols";
import Link from "next/link";
import AuthSlider from "./AuthSlider";
import { Button } from "@/components/ui/button";
import { PiSignIn } from "react-icons/pi";
import { socialSignInAction } from "@/actions/user-action";
import { CredentialButton } from "../buttons/CredentialButton";
import { SocialButton } from "../buttons/SocialButton";

interface AuthFormProps {
  title: string;
  type: "signin" | "signup";
  action: any;
  formInputs: React.ReactNode;
  linkText: string;
  linkHref: string;
}

const AuthForm = ({
  title,
  type,
  action,
  formInputs,
  linkText,
  linkHref,
}: AuthFormProps) => {
  return (
    <Grid2Cols className="sm:border rounded-xl overflow-hidden sm:shadow-md">
      <div className="hidden lg:block">
        <AuthSlider />
      </div>
      <div className="sm:px-8 px-4 pt-14 pb-6 flex flex-col gap-y-4 sm:w-[600px] w-screen">
        <h3 className="text-3xl mb-6 font-bold font-archivo-narrow tracking-tight underline underline-offset-[10px] decoration-primary decoration-4 text-gray-600">
          {title}
        </h3>
        <FormContainer
          action={action}
          schemaName={type === "signin" ? "signInSchema" : "signUpSchema"}
          newSession={true}
          redirectPath="/"
        >
          {formInputs}
          <CredentialButton
            text={type === "signin" ? "Sign in now" : "Sign up now"}
            className="w-full mt-4"
          />
        </FormContainer>
        <QuickAccessSeparator />
        <form action={socialSignInAction} className="space-y-4">
          <SocialButton provider="google" className="w-full" />
          <SocialButton provider="github" className="w-full" />
        </form>
        <div className="mt-8 flex justify-between">
          <Link href={linkHref}>
            <Button variant="link" className="font-semibold text-sm">
              <PiSignIn className="!w-4 !h-4" /> {linkText}
            </Button>
          </Link>
        </div>
      </div>
    </Grid2Cols>
  );
};

export default AuthForm;

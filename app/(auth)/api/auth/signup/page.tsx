import { credentialSignUpAction } from "@/actions/user-action";
import FormInput from "@/components/form/FormInput";
import AuthForm from "@/components/auth/AuthForm";

const SignUpPage = () => {
  return (
    <AuthForm
      title="Ready to explore? Sign up now"
      type="signup"
      action={credentialSignUpAction}
      formInputs={
        <>
          <FormInput
            type="text"
            name="name"
            label="Full name"
            placeholder="Please enter your name..."
          />
          <FormInput
            name="email"
            type="email"
            label="Email address"
            placeholder="Please enter your email address..."
            autocomplete="email"
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            placeholder="Please enter your password..."
            autocomplete="current-password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Please confirm your password..."
            disablePaste={true}
            autocomplete="off"
          />
        </>
      }
      linkText="Already have an account? Sign in"
      linkHref="/api/auth/signin"
    />
  );
};

export default SignUpPage;

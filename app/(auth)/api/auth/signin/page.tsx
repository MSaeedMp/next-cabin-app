import { credentialSignInAction } from "@/actions/user-action";
import FormInput from "@/components/form/FormInput";
import AuthForm from "@/components/auth/AuthForm";

const SignInPage = () => {
  return (
    <AuthForm
      title="Ready to explore? Sign in now"
      type="signin"
      action={credentialSignInAction}
      formInputs={
        <>
          <FormInput
            name="email"
            type="email"
            label="Email address"
            placeholder="Enter your email address..."
            defaultValue="demo@test.io"
            autocomplete="email"
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            defaultValue="demoAccount1234"
            placeholder="Enter your password"
            autocomplete="current-password"
          />
        </>
      }
      linkText="Don't have an account? Sign up"
      linkHref="/api/auth/signup"
    />
  );
};

export default SignInPage;

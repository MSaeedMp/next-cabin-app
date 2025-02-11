"use client";

import { useAuthContext } from "@/hooks/useAuthContext";
import ModalContainer from "../Global/ModalContainer";
import LinkButton from "../buttons/LinkButton";
import { FaInfoCircle } from "react-icons/fa";
import CloseButton from "../buttons/CloseButton";

const AuthModal = () => {
  const { showAuth, closeAuth } = useAuthContext();

  if (!showAuth) return null;

  return (
    <ModalContainer onClick={closeAuth}>
      <div
        className="p-4 shadow-xl flex flex-col gap-6 bg-white rounded-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4 max-w-[500px]">
          <FaInfoCircle className="!w-20 !h-20 text-primary" />
          <p className="text-muted-foreground text-base">
            You are not currently logged in. To access this feature, please{" "}
            <span className="font-semibold text-primary">log in</span> or{" "}
            <span className="font-semibold text-primary">register</span>.
          </p>
          <CloseButton className="self-start" onClick={closeAuth} />
        </div>
        <div className="flex items-center gap-4 self-end">
          <LinkButton to="/api/auth/signin" text="Login" onClick={closeAuth} />
          <LinkButton
            to="/api/auth/signup"
            text="Register"
            onClick={closeAuth}
          />
        </div>
      </div>
    </ModalContainer>
  );
};
export default AuthModal;

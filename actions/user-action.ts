"use server";

import db from "@/utils/db";
import {
  signInSchema,
  signUpSchema,
  updateProfileSchema,
  validateWithZodSchema,
} from "@/lib/schemas";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "@/lib/auth";
import { sendErrorToast, sendSuccessToast } from "./util-action";
import { User } from "@prisma/client";
import { convertEmptyStringsToNull } from "@/utils/helper";

export const socialSignInAction = async (formData: FormData) => {
  const action = formData.get("action");
  if (!action || typeof action !== "string") {
    throw new Error("Invalid action: failed to sign in.");
  }
  await signIn(action, { redirectTo: "/" });
};

export const credentialSignInAction = async (formData: {
  email: string;
  password: string;
}) => {
  const validatedData = validateWithZodSchema(signInSchema, formData);
  try {
    await signIn("credentials", {
      email: validatedData["email"],
      password: validatedData["password"],
      action: "signIn",
      redirect: false,
    });
    return sendSuccessToast("Signed in successfully.");
  } catch (error) {
    return sendErrorToast(error);
  }
};

export const credentialSignUpAction = async (formData: {
  name: string;
  email: string;
  password: string;
}) => {
  console.log(formData);
  const validatedData = validateWithZodSchema(signUpSchema, formData);
  try {
    await signIn("credentials", {
      name: validatedData["name"],
      email: validatedData["email"],
      password: validatedData["password"],
      action: "signUp",
      redirect: false,
    });
    return sendSuccessToast("Signed up successfully.");
  } catch (error) {
    return sendErrorToast(error);
  }
};

export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
  redirect("/");
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};

export const createUserAction = async (
  email: string,
  name: string,
  password: string,
  image: string | null | undefined
) => {
  await db.user.create({
    data: {
      email,
      name,
      image: image || null,
      password,
    },
  });
};

export const updateUserProfileAction = async (formData: User) => {
  const sessoin = await auth();
  const user = sessoin?.user;
  try {
    if (!user) throw new Error("You must be logged in to update your profile.");
    const validatedData = validateWithZodSchema(updateProfileSchema, formData);
    const sanitizedData = convertEmptyStringsToNull(validatedData);

    console.log(sanitizedData);
    await db.user.update({
      where: {
        id: user.userId,
      },
      data: {
        ...sanitizedData,
      },
    });
    return sendSuccessToast("Your profile was updated successfully.");
  } catch (error) {
    return sendErrorToast(error);
  }
};

export const findUserById = async (userId: string): Promise<User | null> => {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
};

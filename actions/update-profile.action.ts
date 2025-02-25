"use server";

import getToken from "@/src/auth/token";
import {
  ErrorResponseSchema,
  SuccessSchema,
  UpdateProfileSchema,
} from "@/src/schemas";
import { revalidatePath } from "next/cache";

type ActionStateType = {
  errors: string[];
  success: string;
};

export async function updateProfile(
  prevState: ActionStateType,
  formData: FormData
) {
  const user = UpdateProfileSchema.safeParse({
    name: formData.get("name"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
  });

  if (!user.success) {
    return {
      errors: user.error.errors.map((error) => error.message),
      success: "",
    };
  }

  const token = await getToken();
  const url = `${process.env.API_URL}/auth/user`;
  const req = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: user.data.name,
      lastname: user.data.lastname,
      email: user.data.email,
    }),
  });

  const json = await req.json();

  if (!req.ok) {
    const { error } = ErrorResponseSchema.parse(json);

    return {
      errors: [error],
      success: "",
    };
  }

  const success = SuccessSchema.parse(json);
  revalidatePath("/admin/profile/settings");

  return {
    errors: [],
    success,
  };
}

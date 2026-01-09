import { UseToastManagerReturnValue } from "@base-ui/react";
import { authClient } from "./auth-client";
import { LogInDataType, SignUpDataType, UserSchema, UserType } from "./types";
import { toast } from "sonner";

export const emailSignUp = async (
  formData: SignUpDataType,
  setUserData: (userData: UserType) => void
) => {
  const { data, error } = await authClient.signUp.email(
    {
      email: formData.email,
      name: formData.name,
      password: formData.password,
      role: "user",
    },
    {
      onError: (ctx) => {
        console.log(ctx.error);
        toast.error("Could not sign up", {
          description: "Error signing up, try again later",
        });
      },
      onSuccess: (ctx) => {
        console.log(ctx.data);
        toast.success("Successfully signed up", {
          description: "Now log in to your account",
        });
      },
    }
  );

  if (!error) {
    return true;
  }
  return false;
};

export const emailLogIn = async (
  formData: LogInDataType,
  setUserData: (userData: UserType) => void
) => {
  const { data, error } = await authClient.signIn.email(
    {
      email: formData.email,
      password: formData.password,
    },
    {
      onError: (ctx) => {
        if (ctx.error.status === 403) {
          toast.error("Email not verified", {
            description: "Please verify your email first",
          });
        } else {
          toast.error("Could not sign in", {
            description: "Error signing in, try again later",
          });
        }
      },
      onSuccess: (ctx) => {
        toast.success("Successfully signed in", {
          description: "Now verify your account",
        });
      },
    }
  );

  if (!error) {
    const validated = await UserSchema.safeParseAsync(data.user);
    if (!validated.success) {
      toast.error("Parsing error", {
        description: "User parsing error",
      });
      console.log(validated.error);
      return false;
    } else {
      setUserData(validated.data);
      return true;
    }
  }
  return false;
};

export const googleSocialSignIn = async () => {
  await authClient.signIn.social(
    {
      provider: "google",
      callbackURL: "/course",
      errorCallbackURL: "/",
      newUserCallbackURL: "/",
      // disableRedirect: true,
    },
    {
      onSuccess: (ctx) => {
        console.log(ctx.data);
      },
      onError: (ctx) => {
        console.log(ctx.error);
      },
    }
  );
};

export const githubSocialSignIn = async () => {
  await authClient.signIn.social(
    {
      provider: "github",
      callbackURL: "/course",
      errorCallbackURL: "/",
      newUserCallbackURL: "/",
      // disableRedirect: true,
    },
    {
      onSuccess: (ctx) => {
        console.log(ctx.data);
      },
      onError: (ctx) => {
        console.log(ctx.error);
      },
    }
  );
};

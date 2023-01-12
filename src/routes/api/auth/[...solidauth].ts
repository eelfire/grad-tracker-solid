import { SolidAuth, type SolidAuthConfig } from "@solid-auth/next";
import Google from "@auth/core/providers/google";
import { serverEnv } from "~/env/server";

export const authOpts: SolidAuthConfig = {
  providers: [
    Google({
      clientId: serverEnv.GOOGLE_CLIENT_ID,
      clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: false,
};

export const { GET, POST } = SolidAuth(authOpts);

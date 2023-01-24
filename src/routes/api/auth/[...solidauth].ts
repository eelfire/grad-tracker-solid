//@ts-nocheck
import { SolidAuth, type SolidAuthConfig } from "@auth/solid-start";
import Google from "@auth/core/providers/google";

export const authOpts: SolidAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: false,
};

export const { GET, POST } = SolidAuth(authOpts);

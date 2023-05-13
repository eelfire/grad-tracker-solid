import { type SolidAuthConfig } from "@solid-auth/base";
import Google from "@auth/core/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { prisma } from "./db/client";
import { serverEnv } from "~/env/server";

// declare module "@auth/core/types" {
//   export interface Session {
//     user?: {
//       id?: string;
//     } & DefaultSession["user"];
//   }
// }

export const authOptions: SolidAuthConfig = {
  // callbacks: {
  //   session({ session, user }) {
  //     if (session.user) {
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   },
  // },
  // // @ts-expect-error - this is a valid adapter
  // adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: serverEnv.GOOGLE_CLIENT_ID,
      clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: false,
};

import { Title, Head, Meta, Link, Body } from "solid-start";
import { Show } from "solid-js";
import { getSession } from "@solid-auth/base";
import { createServerData$ } from "solid-start/server";
// import { authOptions } from "~/server/auth";
import { authOptions } from "~/routes/api/auth/[...solidauth]";
import { signIn, signOut } from "@solid-auth/base/client";

export const useSession = () => {
  return createServerData$(
    async (_, { request }) => {
      return await getSession(request, authOptions);
    },
    { key: () => ["auth_user"] }
  );
};

const loginPage = () => {
  const session = useSession();
  return (
    <>
      <Head>
        <Title>Graduation Tracker</Title>
        <Meta
          name="description"
          content="Login page for the Graduation Tracker website. This website will help with your graduation and career paths. Created by students of IITGN."
        />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Body class="flex min-h-screen flex-col items-center justify-center bg-white">
        <button onClick={() => console.log(session()?.user)}>
          session console log
        </button>
        <div class="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div class="flex flex-row">
            <img src="/gradhat.svg" alt="logo" class="border-r-4 p-4" />
            <img src="/iitgn-logo.svg" alt="IITGN Logo" class="p-4" />
          </div>
          <h1 class="text-5xl">Welcome to Graduation Requirements Tracker</h1>
          <h3 class=" text-gray-500 ">Plan your graduation requirements</h3>
          <Show
            when={session()?.user}
            keyed
            fallback={
              <>
                <p class="text-lg font-semibold">You are not signed in</p>
                <button
                  class="p-2.5 rounded-lg bg-[#346df1] text-white text-lg font-bold flex items-center justify-center"
                  onClick={() => {
                    console.log("signing in...");
                    signIn();
                  }}
                >
                  Sign in
                </button>
              </>
            }
          >
            {(us) => (
              <>
                <div class="flex gap-2 items-center">
                  <Show when={us?.image} keyed>
                    {(im) => <img src={im} class="w-12 h-12 rounded-full" />}
                  </Show>
                  <div class="flex flex-col">
                    <h3 class="font-bold text-lg">Signed in as</h3>
                    <p class="text-lg font-semibold">{us?.name}</p>
                  </div>
                </div>
                <button
                  onClick={() => signOut({ redirectTo: "/login" })}
                  class="text-[#555] font-semibold underline"
                >
                  Sign out
                </button>
              </>
            )}
          </Show>
          <div>
            <img src="/login-page-person.svg" alt="person" />
          </div>
          <div class="flex flex-col items-center gap-2">
            <p class="text-2xl">hello from other side</p>
          </div>
        </div>
      </Body>
    </>
  );
};

export default loginPage;

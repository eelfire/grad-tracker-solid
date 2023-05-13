import { Show, Suspense, type VoidComponent } from "solid-js";
import { Body, Head, Link, Meta, Title } from "solid-start";
import Navbar from "~/components/Navbar";
import Quest from "~/components/Quest";
import { createSession, signIn, signOut } from "@solid-auth/base/client";

const Home: VoidComponent = () => {
  return (
    <>
      <Head>
        <Title>Grad-Tracker</Title>
        <Meta
          name="description"
          content="The Graduation Tracker. This website will help with your graduation and career paths. Created by students of IITGN."
        />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Navbar />
        <Suspense>
          <GetSession />
        </Suspense>
        <div class="max-w-screen-2xl m-auto">
          <details class="m-6 mt-12 p-4 border-2 rounded-2xl">
            <summary class=" text-2xl">Questionnaire</summary>
            <Quest />
          </details>
        </div>
        <div class="m-12">
          <div class="w-full flex flex-row max-w-screen-2xl overflow-hidden m-auto">
            <div class="flex flex-col flex-1">
              <div class="profile flex flex-row border-2 rounded-2xl m-6 h-64 place-content-around items-center">
                <img
                  src="/login-page-person.svg"
                  alt=""
                  class=" max-h-60 p-6 object-scale-down"
                />
                <div class="">
                  <h2 class=" text-3xl pb-3 font-medium">Shrey Joshi</h2>
                  <p class=" text-gray-700">Electrical Engineering</p>
                  <p class=" text-gray-700">Second Year Undergraduate</p>
                </div>
                <div class=" bg-teal-100 w-32 flex flex-col items-center justify-center p-2 rounded-lg">
                  <p class=" text-3xl font-bold">10</p>
                  <p class=" text-teal-500 font-semibold">CPI</p>
                </div>
              </div>
              <div class="feed m-6 bg-gray-100 rounded-2xl">
                <h3 class="font-semibold text-xl m-6">FEED</h3>
                <div>
                  <div class="m-6 flex">
                    <p class="m-3">Workshop</p>
                    <p class="m-3 flex-1 font-semibold">
                      Introduction to Machine Learning
                    </p>
                    <p class="m-3">by Technical Council</p>
                  </div>
                  <div class="m-6 flex">
                    <p class="m-3">Workshop</p>
                    <p class="m-3 flex-1 font-semibold">
                      Introduction to Machine Learning
                    </p>
                    <p class="m-3">by Technical Council</p>
                  </div>
                  <div class="m-6 flex">
                    <p class="m-3">Workshop</p>
                    <p class="m-3 flex-1 font-semibold">
                      Introduction to Machine Learning
                    </p>
                    <p class="m-3">by Technical Council</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col w-4/12">
              <div class="credits-progress flex flex-col bg-sky-100 text-blue-500 rounded-2xl m-6 h-64 justify-around p-8">
                <h3 class=" font-semibold text-2xl">Credits Planned:</h3>
                <div class="flex">
                  <h3 class="flex-1 text-2xl font-bold self-center">80%</h3>
                  <button class=" p-3 w-24 bg-blue-400 rounded-xl text-white">
                    Plan
                  </button>
                </div>
                <div class="w-full bg-white rounded-full h-2.5">
                  <div
                    class="bg-blue-400 h-2.5 rounded-full"
                    style="width: 80%"
                  ></div>
                </div>
              </div>
              <div class="upcoming m-6 bg-gray-100 rounded-2xl">
                <h3 class="font-semibold text-xl m-6">UPCOMING</h3>
                <div>
                  <div class="m-6 flex">
                    <p class="m-3">12th Jan</p>
                    <p class="m-3 flex-1 font-semibold">ML Workshop</p>
                  </div>
                  <div class="m-6 flex">
                    <p class="m-3">12th Jan</p>
                    <p class="m-3 flex-1 font-semibold">ML Workshop</p>
                  </div>
                  <div class="m-6 flex">
                    <p class="m-3">12th Jan</p>
                    <p class="m-3 flex-1 font-semibold">ML Workshop</p>
                  </div>
                </div>
              </div>
              <div class="sem-overview m-6 bg-gray-100 rounded-2xl">
                <h3 class="font-semibold text-xl m-6">SEMESTER OVERVIEW</h3>
                <div>
                  <div class="flex items-center">
                    <div class="m-6 w-12 h-12 rounded-xl bg-blue-400"></div>
                    <div class="m-6">
                      <p class="font-semibold text-lg">ES 201</p>
                      <p>Intro to Materials</p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="m-6 w-12 h-12 rounded-xl bg-blue-400"></div>
                    <div class="m-6">
                      <p class="font-semibold text-lg">ES 201</p>
                      <p>Intro to Materials</p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="m-6 w-12 h-12 rounded-xl bg-blue-400"></div>
                    <div class="m-6">
                      <p class="font-semibold text-lg">ES 201</p>
                      <p>Intro to Materials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
};

export default Home;

const GetSession: VoidComponent = () => {
  const session = createSession();
  return (
    <div class="flex flex-col items-center justify-center gap-4">
      <Show
        when={session()}
        fallback={
          <button
            onClick={() => {
              console.log("signing in");
              signIn();
            }}
            class="rounded-full bg-black px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          >
            Sign in
          </button>
        }
      >
        <span class="text-xl text-white">Welcome {session()?.user?.name}</span>
        <button
          onClick={() => signOut({ redirectTo: "/" })}
          class="rounded-full bg-black px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        >
          Sign out
        </button>
      </Show>
    </div>
  );
};

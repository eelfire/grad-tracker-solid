import { Title, Head, Meta, Link, Body } from "solid-start";
import {} from "solid-js";
import { NavBar } from "~/components";

const loginPage = () => {
  return (
    <>
      <Head>
        <Title>Graduation Tracker</Title>
        <Meta
          name="description"
          content="The website to help with your graduation and career paths. Created by students of IITGN."
        />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Body class="flex min-h-screen flex-col items-center justify-center bg-white">
        <div class="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div class="flex flex-row">
            <img src="/gradhat.svg" alt="logo" class="border-r-4 p-4" />
            <img src="/iitgn-logo.svg" alt="IITGN Logo" class="p-4" />
          </div>
          <h1 class="text-5xl">Welcome to Graduation Requirements Tracker</h1>
          <h3 class=" text-gray-500 ">Plan your graduation requirements</h3>
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

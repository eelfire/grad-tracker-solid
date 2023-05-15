import { signOut } from "@solid-auth/base/client";
import { createSession } from "@solid-auth/base/client";
import { Show } from "solid-js";

const Navbar = () => {
  const session = createSession();
  const user = () => session()?.user;

  return (
    <nav class="flex flex-row h-16 items-center justify-center p-4 border-b-2">
      <div class="flex-start h-8 flex flex-row items-center ml-8">
        <img src="/gradhat.svg" alt="profile" class="w-12" />
        <h1 class="p-4">Grad-Tracker</h1>
      </div>
      <div class="flex-1 items-center p-2 m-2">
        <a href="/" class="navbar-button">
          Dashboard
        </a>
        <a href="/courses" class="navbar-button">
          Courses
        </a>
        <a href="/planner" class="navbar-button">
          Planner
        </a>
        <a href="/feed" class="navbar-button">
          Feed
        </a>
        <a href="/calendar" class="navbar-button">
          Calendar
        </a>
      </div>
      <div class="flex-end mr-8 flex items-center">
        <input
          type="text"
          placeholder="Search"
          class="border-2 bg-gray-100 p-1 mr-6 rounded-lg"
        />
        <button class="flex items-center">
          <Show when={user()?.name} keyed>
            {(nm) => <p class="text-lg m-2">Hi! {nm}</p>}
          </Show>
          <Show when={user()?.image} keyed>
            {(im) => <img src={im} class="h-10 rounded-full m-2" />}
          </Show>
          {/* <img src="{user?.image}" alt="profile" class=" h-8" /> */}
        </button>
        <button
          class="ml-2 rounded-lg bg-red-500"
          onClick={() => signOut({ redirectTo: "/login", redirect: true })}
        >
          <p class="text-red-100 pl-3 pr-3 pt-2 pb-2">Logout</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import { signOut } from "@solid-auth/base/client";

const Navbar = () => {
  return (
    <nav class="flex flex-row h-16 items-center justify-center p-4 border-b-2">
      <div class="flex-start h-8 flex flex-row items-center ml-8">
        <img src="/gradhat.svg" alt="profile" class="w-12" />
        <h1 class="p-4">Grad-Tracker</h1>
      </div>
      <div class="flex-1 items-center p-2 m-2">
        <a href="/" class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg">
          Dashboard
        </a>
        <a href="/courses" class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg">
          Courses
        </a>
        <a href="/planner" class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg">
          Planner
        </a>
        <a href="/feed" class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg">
          Feed
        </a>
        <a
          href="/calendar"
          class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg"
        >
          Calendar
        </a>
      </div>
      <div class="flex-end mr-8 flex items-center">
        <input
          type="text"
          placeholder="Search"
          class="border-2 bg-gray-100 p-1 mr-6 rounded-lg"
        />
        <button class="">
          <img src="/user.svg" alt="profile" class=" h-8" />
        </button>
        <button
          class="ml-2 rounded-lg bg-red-500"
          onClick={() => signOut({ redirectTo: "/login" })}
        >
          <p class="text-red-100 pl-3 pr-3 pt-2 pb-2">Logout</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

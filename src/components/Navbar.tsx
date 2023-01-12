// import {} from "solid-js";
import { A } from "solid-start";

const Navbar = () => {
  return (
    <nav class="flex flex-row h-16 items-center justify-center p-4 border-b-2">
      <div class="flex-start h-8 flex flex-row items-center ml-8">
        <img src="/gradhat.svg" alt="profile" class="w-12" />
        <h1 class="p-4">Grad-Tracker</h1>
      </div>
      <div class="flex-1 items-center p-2 m-2">
        <A href="/" class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg">
          Dashboard
        </A>
        <A href="/courses" class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg">
          Courses
        </A>
        <A href="/planner" class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg">
          Planner
        </A>
        <A href="/feed" class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg">
          Feed
        </A>
        <A
          href="/calendar"
          class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg"
        >
          Calendar
        </A>
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
      </div>
    </nav>
  );
};

export default Navbar;

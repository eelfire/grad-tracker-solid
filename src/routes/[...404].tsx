import { A } from "solid-start";
import Navbar from "~/components/Navbar";

const pageNotFound = () => {
  return (
    <div>
      <Navbar />
      <div class="flex flex-col max-w-screen-2xl items-center m-auto">
        <div class="m-4 p-12">
          <img
            src="/page-not-found.svg"
            alt="illustration of 404 page not found"
            class="max-w-screen-sm"
          />
        </div>
        <p class="text-2xl m-4">Page not found</p>
        <div class="mt-8">
          <A href="/" class="p-4 m-4 bg-teal-100 text-teal-600 rounded-lg">
            Go back to Dashboard
          </A>
        </div>
      </div>
    </div>
  );
};

export default pageNotFound;

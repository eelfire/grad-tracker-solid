import { type VoidComponent } from "solid-js";
import { Body, Head, Link, Meta, Title } from "solid-start";
import Navbar from "~/components/Navbar";

import {
  DragDropProvider,
  DragDropSensors,
  DragEventHandler,
  useDragDropContext,
  createDraggable,
  createDroppable,
  Id,
} from "@thisbeyond/solid-dnd";
import { createSignal, Show } from "solid-js";

// const Draggable = () => {
//   const draggable = createDraggable(1);
//   return (
//     <div
//       use:draggable
//       class="rounded-xl text-blue-500 overflow-hidden shadow-lg p-3 bg-sky-100 w-40 h-36 flex flex-col justify-around draggable"
//     >
//       <div class="font-semibold text-lg mb-px self-center">ES 301</div>
//       <p class="text-xs self-center text-center">
//         Data Structures and Algorithms II
//       </p>
//       <div class="flex flex-row pt-4">
//         <div class="flex-1">
//           <span class="inline-block bg-blue-400 rounded-full px-3 py-1 text-xs text-slate-100 mr-2 mb-2">
//             Know more
//           </span>
//         </div>
//         <p class="font-semibold text-xl mr-3">4</p>
//       </div>
//     </div>
//   );
// };

// const Droppable = (props) => {
//   const droppable = createDroppable(1);
//   return (
//     <div
//       use:droppable
//       class="droppable m-4 border-4"
//       classList={{ "!droppable-accept": droppable.isActiveDroppable }}
//     >
//       Droppable
//       {props.children}
//     </div>
//   );
// };

// const [where, setWhere] = createSignal("outside");
// const onDragEnd: DragEventHandler = ({ droppable }) => {
//   if (droppable) {
//     setWhere("inside");
//   } else {
//     setWhere("outside");
//   }
// };

const Draggable = (props: { id: Id }) => {
  const draggable = createDraggable(props.id);
  return (
    <div
      use:draggable
      class="rounded-xl text-blue-500 overflow-hidden shadow-lg p-3 bg-sky-100 w-40 h-36 flex flex-col justify-around draggable"
    >
      <div class="font-semibold text-lg mb-px self-center">ES 301</div>
      <p class="text-xs self-center text-center">
        Data Structures and Algorithms II
      </p>
      <div class="flex flex-row pt-4">
        <div class="flex-1">
          <span class="inline-block bg-blue-400 rounded-full px-3 py-1 text-xs text-slate-100 mr-2 mb-2">
            Know more
          </span>
        </div>
        <p class="font-semibold text-xl mr-3">4</p>
      </div>
    </div>
  );
};

const Droppable = (props: { id: Id }) => {
  const droppable = createDroppable(props.id);
  return <div use:droppable>droppable</div>;
};

const Sandbox = () => {
  const [, { onDragEnd }] = useDragDropContext();

  onDragEnd(({ draggable, droppable }) => {
    if (droppable) {
      // Handle the drop. Note that solid-dnd doesn't move a draggable into a
      // droppable on drop. It leaves it up to you how you want to handle the
      // drop.
    }
  });

  return (
    <div>
      <Draggable id="draggable-1" />
      <Droppable id="droppable-2" />
    </div>
  );
};

const Planner: VoidComponent = () => {
  return (
    <>
      <Head>
        <Title>Grad-Tracker</Title>
        <Meta
          name="description"
          content="The Planner page for Graduation Tracker. This website will help with your graduation and career paths. Created by students of IITGN."
        />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Navbar />
        <div class="flex flex-row mx-7">
          <div class="flex-1 items-center">
            <div class="credits-progress flex flex-col text-blue-500 justify-around p-7 w-4/12">
              <div class="flex flex-row ">
                <h3 class="flex flex-1 font-semibold text-lg pb-3">Credits:</h3>
                <p class="text-base place-self-end pb-1">80%</p>
              </div>
              <div class="w-full bg-sky-100 rounded-full h-2.5">
                <div
                  class="bg-blue-400 h-2.5 rounded-full"
                  style="width: 80%"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex flex-end mr-8 items-center ">
            <button class="ml-2 rounded-lg bg-blue-600 mr-5">
              <p class="text-slate-100 pl-3 pr-3 pt-2 pb-2">Save</p>
            </button>
            <button
              class="ml-2 rounded-lg bg-red-600"
              // onclick={() => signOut("google")}
            >
              <p class="text-red-100 pl-3 pr-3 pt-2 pb-2">Cancel</p>
            </button>
          </div>
        </div>

        {/* <DragDropProvider onDragEnd={onDragEnd}>
          <DragDropSensors />
          <Droppable>
            <Show when={where() === "inside"}>
              <Draggable />
            </Show>
          </Droppable>
        </DragDropProvider> */}

        <div class="m-12">
          <div class="w-full flex flex-row max-w-screen-2xl overflow-hidden m-auto pb-7">
            <div class="flex flex-col flex-1">
              <DragDropProvider>
                <DragDropSensors>
                  <Sandbox />
                </DragDropSensors>
              </DragDropProvider>
              <div class="rounded-xl text-blue-500 overflow-hidden shadow-lg p-3 bg-sky-100 w-40 h-36 flex flex-col justify-around">
                <div class="font-semibold text-lg mb-px self-center">
                  ES 301
                </div>
                <p class="text-xs self-center text-center">
                  Data Structures and Algorithms II
                </p>
                <div class="flex flex-row pt-4">
                  <div class="flex-1">
                    <span class="inline-block bg-blue-400 rounded-full px-3 py-1 text-xs text-slate-100 mr-2 mb-2">
                      Know more
                    </span>
                  </div>
                  <p class="font-semibold text-xl mr-3">4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
};

// export default DragAndDropExample;
export default Planner;

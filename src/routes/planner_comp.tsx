import {
  DragDropProvider,
  DragDropSensors,
  DragOverlay,
  SortableProvider,
  createSortable,
  createDroppable,
  closestCenter,
} from "@thisbeyond/solid-dnd";
import { batch, For } from "solid-js";
import { createStore, produce } from "solid-js/store";

const Sortable = (props: any) => {
  const sortable = createSortable(props.item);
  return (
    <div
      use:sortable
      class="cursor-move rounded-lg text-blue-500 shadow-lg p-3 bg-sky-100 w-40 h-36 flex flex-col justify-around m-3"
      classList={{ "opacity-25": sortable.isActiveDraggable }}
    >
      <div class="font-semibold text-lg mb-px self-center">
        ES 301 {props.item}
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
  );
};

const Row = (props: any) => {
  const droppable = createDroppable(props.id);
  return (
    <div
      use:droppable
      class="column w-auto border rounded-lg m-3 mr-36 border-gray-500 bg-sky-200 grid-flow-col overflow-scroll"
    >
      <SortableProvider ids={props.items}>
        <p class="border rounded-lg h-36 w-40 m-3 text-4xl text-gray-700 border-gray-500">
          Sem {props.id}
        </p>
        <For each={props.items}>{(item) => <Sortable item={item} />}</For>
        <button
          class="border rounded-lg h-36 w-40 m-3 text-4xl text-gray-700 border-gray-500"
          onClick={() => addCourse(props.id, 7)}
        >
          +
        </button>
      </SortableProvider>
    </div>
  );
};

// const dustbin = createDroppable("dustbin");

const [sem, setSem] = createStore({
  A: [1, 2, 3],
  B: [4, 5, 6],
});

const addSem = (id) => {
  setSem((sem) => ({ ...sem, [id]: [] }));
};

// delSem is not working
const delSem = (id) => {
  console.log(id);
  setSem((sem) => {
    console.log(sem);
    const { [id]: _, ...rest } = sem;
    console.log(rest);
    return rest;
  });
};

const renameSem = (id, name) => {
  setSem((sem) => ({ ...sem, [name]: sem[id] }));
  delSem(id);
};

const addCourse = (id, number) => {
  setSem((sem) => {
    return { ...sem, [id]: [...sem[id], number] };
  });
};

const delCourse = (id) => {
  setSem((sem) => ({ ...sem, [id]: sem[id].slice(0, -1) }));
};

const Planner = () => {
  const containerIds = () => Object.keys(sem);

  const isContainer = (id) => containerIds().includes(id);

  const getContainer = (id) => {
    for (const [key, items] of Object.entries(sem)) {
      if (items.includes(id)) {
        return key;
      }
    }
  };

  const closestContainerOrItem = (draggable, droppables, context) => {
    const closestContainer = closestCenter(
      draggable,
      droppables.filter((droppable) => isContainer(droppable.id)),
      context
    );
    if (closestContainer) {
      const containerItemIds = sem[closestContainer.id];
      const closestItem = closestCenter(
        draggable,
        droppables.filter((droppable) =>
          containerItemIds.includes(droppable.id)
        ),
        context
      );
      if (!closestItem) {
        return closestContainer;
      }

      if (getContainer(draggable.id) !== closestContainer.id) {
        const isLastItem =
          containerItemIds.indexOf(closestItem.id as number) ===
          containerItemIds.length - 1;

        if (isLastItem) {
          const belowLastItem =
            draggable.transformed.center.y > closestItem.transformed.center.y;

          if (belowLastItem) {
            return closestContainer;
          }
        }
      }
      return closestItem;
    }
  };

  const move = (draggable, droppable, onlyWhenChangingContainer = true) => {
    const draggableContainer = getContainer(draggable.id);
    const droppableContainer = isContainer(droppable.id)
      ? droppable.id
      : getContainer(droppable.id);

    if (
      draggableContainer != droppableContainer ||
      !onlyWhenChangingContainer
    ) {
      const containerItemIds = sem[droppableContainer];
      let index = containerItemIds.indexOf(droppable.id);
      if (index === -1) index = containerItemIds.length;

      batch(() => {
        setSem(draggableContainer, (items) =>
          items.filter((item) => item !== draggable.id)
        );
        setSem(droppableContainer, (items) => [
          ...items.slice(0, index),
          draggable.id,
          ...items.slice(index),
        ]);
      });
    }
  };

  const onDragOver = ({ draggable, droppable }) => {
    if (draggable && droppable) {
      move(draggable, droppable);
    }
  };

  const onDragEnd = ({ draggable, droppable }) => {
    if (draggable && droppable) {
      move(draggable, droppable, false);
    }
  };

  return (
    <>
      <button
        class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg"
        onClick={() => console.log(sem)}
      >
        console log planner
      </button>
      <button
        class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg"
        onClick={() => addSem("C")}
      >
        add sem C
      </button>
      <button
        class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg"
        onClick={() => delSem("C")}
      >
        del sem C
      </button>
      <button
        class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg"
        onClick={() => addCourse("C", 8)}
      >
        add course in C
      </button>
      <button
        class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg"
        onClick={() => delCourse("C")}
      >
        del course in C
      </button>
      <button
        class="p-2 m-2 bg-teal-100 text-teal-600 rounded-lg"
        onClick={() => renameSem("C", "D")}
      >
        rename sem C to D
      </button>

      <p>json.stringify(sem) {JSON.stringify(sem)}</p>

      <div class="flex flex-col flex-1 self-stretch">
        <DragDropProvider
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          collisionDetector={closestContainerOrItem}
        >
          <DragDropSensors />
          <div class="columns">
            <For each={containerIds()}>
              {(key) => <Row id={key} items={sem[key]} />}
            </For>
          </div>
          <DragOverlay>
            {(draggable) => <div class="sortable">{draggable.id}</div>}
          </DragOverlay>
        </DragDropProvider>
      </div>
      <div></div>
    </>
  );
};

export default Planner;

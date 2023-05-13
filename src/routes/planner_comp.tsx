import {
  DragDropProvider,
  DragDropSensors,
  DragOverlay,
  SortableProvider,
  createSortable,
  createDroppable,
  closestCenter,
} from "@thisbeyond/solid-dnd";
import { batch, createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";

const Sortable = (props) => {
  const sortable = createSortable(props.item);
  return (
    <div
      use:sortable
      class="rounded-xl text-blue-500 overflow-hidden shadow-lg p-3 bg-sky-100 w-40 h-36 flex flex-col justify-around m-3"
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

const Column = (props) => {
  const droppable = createDroppable(props.id);
  return (
    <div
      use:droppable
      class="column border-5 m-5 border-black w-5/12 bg-sky-200 flex flex-row overflow-hidden"
    >
      <SortableProvider ids={props.items}>
        <For each={props.items}>{(item) => <Sortable item={item} />}</For>
      </SortableProvider>
    </div>
  );
};

const MultipleListsExample = () => {
  const [containers, setContainers] = createStore<Record<string, number[]>>({
    A: [1, 2, 3],
    B: [4, 5, 6],
  });

  const containerIds = () => Object.keys(containers);

  const isContainer = (id) => containerIds().includes(id);

  const getContainer = (id) => {
    for (const [key, items] of Object.entries(containers)) {
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
      const containerItemIds = containers[closestContainer.id];
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
      const containerItemIds = containers[droppableContainer];
      let index = containerItemIds.indexOf(droppable.id);
      if (index === -1) index = containerItemIds.length;

      batch(() => {
        setContainers(draggableContainer, (items) =>
          items.filter((item) => item !== draggable.id)
        );
        setContainers(droppableContainer, (items) => [
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
    <div class="flex flex-col flex-1 mt-5 self-stretch">
      <DragDropProvider
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
        collisionDetector={closestContainerOrItem}
      >
        <DragDropSensors />
        <div class="columns">
          <For each={containerIds()}>
            {(key) => <Column id={key} items={containers[key]} />}
          </For>
        </div>
        <DragOverlay>
          {(draggable) => <div class="sortable">{draggable.id}</div>}
        </DragOverlay>
      </DragDropProvider>
    </div>
  );
};

export default MultipleListsExample;

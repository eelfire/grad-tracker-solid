import { type VoidComponent, Switch, Match, createResource } from "solid-js";
import { Title } from "solid-start";

const Home: VoidComponent = () => {
  const [res] = createResource(() =>
    fetch("/api/notes").then((res) => res.json())
  );

  return (
    <>
      <Title>Create JD App</Title>
      <div>
        <Switch 
          fallback={
            <pre class="font-bold text-2xl text-gray-500">
              {JSON.stringify(res(), null, 2)}
            </pre>
          }
        >
          <Match when={res.loading}>
            <div class="font-bold text-2xl text-gray-500">Loading...</div>
          </Match>
        </Switch>
      </div>
    </>
  );
};

export default Home;

import type { Session } from "@auth/core/types";
import { getSession } from "@solid-auth/base";
import type { Component } from "solid-js";
import { Show } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$, redirect } from "solid-start/server";
import { authOptions } from "~/server/auth";

const Protected = (Comp: IProtectedComponent) => {
  const routeData = () => {
    return createServerData$(
      async (_, { request }) => {
        // const session = await getSession(event.request, authOptions);
        const session = await getSession(request, authOptions);
        if (!session) {
          throw redirect("/login");
        }
        return session;
      },
      { key: () => ["auth_user"] }
    );
  };

  return {
    routeData,
    Page: () => {
      const session = useRouteData<typeof routeData>();
      return (
        <Show when={session()} keyed>
          {(sess) => <Comp {...sess} />}
        </Show>
      );
    },
  };
};

type IProtectedComponent = Component<Session>;

export default Protected;

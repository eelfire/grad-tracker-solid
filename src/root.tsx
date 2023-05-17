// @refresh reload
import "./root.css";
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { SessionProvider } from "@solid-auth/base/client";
import { trpc, queryClient } from "~/utils/trpc";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Grad-Tracker</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <trpc.Provider queryClient={queryClient}>
          <SessionProvider>
            <Suspense>
              <ErrorBoundary>
                <Routes>
                  <FileRoutes />
                </Routes>
              </ErrorBoundary>
            </Suspense>
          </SessionProvider>
        </trpc.Provider>
        <Scripts />
      </Body>
    </Html>
  );
}

import { Suspense, createElement, lazy } from "react";
import { CPageLoader } from "../../common/components/others";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function asyncLayout(factory: () => Promise<{ default: any }>) {
  const Layout = lazy(factory);

  return createElement(
    Suspense,
    {
      fallback: createElement(CPageLoader),
    },
    createElement(Layout)
  );
}

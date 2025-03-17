import { useState } from "react";
import { useRouterChange, Outlet } from "wiscore/router";

import LIndex from "./lIndex";

import { Error } from "../Error";

// @ts-ignore
window.$__wis_layouts__ = {
  "index": LIndex,
}

export function hasLayout(name: string) {
  // @ts-ignore
  return name in window.$__wis_layouts__;
}

function getLayout(): string {
  const pathname = window.location.hash.replace("#", "").split("?")[0]
  const [layoutName] = pathname.split("/").filter(Boolean);

  return layoutName;
}

function useLayout() {
  const [layout, setLayout] = useState<string>(getLayout())

  useRouterChange(() => {
    setLayout(getLayout())
  })

  // @ts-ignore
  return window.$__wis_layouts__[layout];
}

export function Layout() {
  const Layout = useLayout();

  if (!Layout) {
    return (
      <Error>
        <Outlet />
      </Error>
    );
  }

  return (
    <Layout>
      <Error>
        <Outlet />
      </Error>
    </Layout>
  );
}

import { Outlet, RouteObject } from "react-router-dom";
import { asyncLayout } from "../utils/funcs/route";
import CLoginLayout from "../common/components/layouts/CloginLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    errorElement: asyncLayout(
      () => import("../common/components/layouts/CMainLayout/index")
    ),
    children: [
      {
        path: "/",
        element: asyncLayout(
          () => import("../common/components/layouts/CMainLayout/index")
        ),
      },
      {
        path: "/login",
        element: <CLoginLayout />,
      },
    ],
  },
];

export default routes;

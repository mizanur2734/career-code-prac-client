import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayouts from "./Pages/RootLayouts";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: "/signIn",
        Component: SignIn
      }
    ],
  },
]);

export default router;

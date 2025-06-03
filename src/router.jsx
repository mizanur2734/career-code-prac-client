import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayouts from "./Pages/RootLayouts";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import JobDetails from "./Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "./Pages/JobApply/JobApply";
import MyApplications from "./Pages/MyApplication/MyApplications";

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
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
      }, 
      {
        path: "/jobApply/:id",
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path: "/myApplications",
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
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

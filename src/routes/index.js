import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Loading from "../components/loading/Loading";
import Action from "../pages/vaccine/Vaccine";
import New from "../pages/new/New";
import Doctors from "../pages/doctors/Doctors";

// load component theo tung page rieng biet
const Layout = React.lazy(() => import("../layout/container/Layout"));
const Home = React.lazy(() => import("../pages/home/Home"));
const Health = React.lazy(() => import("../pages/health/Health"));
const Login = React.lazy(() => import("../pages/login/Login"));
const Register = React.lazy(() => import("../pages/register/Register"));
const Detail = React.lazy(() => import("../pages/new/detail/Detail"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<Loading></Loading>}>
        <Layout />
      </React.Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<Loading />}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "home",
        element: (
          <React.Suspense fallback={<Loading />}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "action",
        element: (
          <React.Suspense fallback={<Loading />}>
            <Action />
          </React.Suspense>
        ),
      },
      {
        path: "new",
        element: (
          <React.Suspense fallback={<Loading />}>
            <New />
          </React.Suspense>
        ),
        children: [{
          path: ":id",
          element: (
            <React.Suspense fallback={<Loading />}>
              <Detail />
            </React.Suspense>
          ),
        }],
      },
      {
        path: "doctors",
        element: (
          <React.Suspense fallback={<Loading />}>
            <Doctors />
          </React.Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <React.Suspense fallback={<Loading />}>
            <Health />
          </React.Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <React.Suspense fallback={<Loading />}>
            <Login />
          </React.Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <React.Suspense fallback={<Loading />}>
            <Register />
          </React.Suspense>
        ),
      },
    ],
  },
]);
export default router;

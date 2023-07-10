import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Pages /Login";
import Layout from "../Components/Common/Layout";
import Home from "../Components/Pages /Home";
import Courses from "../Components/Pages /Courses";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
    ],
  },
]);

export default router;

// for login authentication

// {
//   path: "/",
//   element: (
//     <PrivateRoute>
//       <Layout />
//     </PrivateRoute>
//   ),
//   children: [
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/courses",
//       element: <Courses />,
//     },
//   ],
// },

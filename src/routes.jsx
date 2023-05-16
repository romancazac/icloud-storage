
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

import { FilesPage } from "./pages/FilesPage";
import Dashboard from "./Dashboard";
import { Photo } from "./pages/Photo";
import { Basket } from "./pages/Basket";
import { Profile } from "./pages/Profile";
import { Auth } from "./pages/Auth";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";




export const router = createBrowserRouter([
  {

    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [

          {
            path: "files",
            element: <FilesPage />
          },
          {
            path: "photo",
            element: <Photo />
          },
          {
            path: "basket",
            element: <Basket />
          },
        ]
      },
      {
        path: "profile",
        element:  <PrivateRoute><Profile /></PrivateRoute>

      },
      {
        path: "auth",
        element:  <Auth />
      },
    ]

  },






]);
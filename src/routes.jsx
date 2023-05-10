
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

import { Files } from "./pages/Files";
import Dashboard from "./Dashboard";
import { Photo } from "./pages/Photo";
import { Basket } from "./pages/Basket";
import { Profile } from "./pages/Profile";
import { Auth } from "./pages/Auth";




export const router = createBrowserRouter([
  {

    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [

          {
            path: "files",
            element: <Files />
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
        element: <Profile />

      },
      {
        path: "auth",
        element: <Auth />
      },
    ]

  },






]);
import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import SignUp from "./pages/SignUp";
import { Protected } from "./components/Protected";
import VideoGame from "./pages/VideoGame";

export const router = createBrowserRouter([
  {
    element: <MainLayout />, 
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tvshows",
        element: <TvShows />,
      },
      {
        path:"/video-games",
        element: <VideoGame />
      },
    ],
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
]);
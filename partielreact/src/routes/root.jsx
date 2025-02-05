import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Movie from "../pages/movie";
import ErrorPage from "../pages/404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
      },
      {
        path: "/movie",
        element: <Movie />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]);

  export default router;
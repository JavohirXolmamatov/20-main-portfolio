import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import MainPage from "./components/MainPage";
import ErrorPage from "./components/ErrorPage";
import {
  Home,
  AboutMe,
  Portfolio,
  Contact,
  MainBlogPage,
  Skills,
} from "./components/index";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <AboutMe />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "blogs",
          element: <MainBlogPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

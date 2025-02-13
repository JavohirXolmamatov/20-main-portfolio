import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import MainPage from "./components/MainPage";
import ErrorPage from "./components/ErrorPage";
import {
  Home,
  AboutMe,
  Portfolio,
  Contact,
  Skills,
  Admin,
  AdminLogin,
  Projects,
  AdminHome,
} from "./components/index";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
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
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <AdminLogin />,
        },
        {
          path: "/admin",
          element: <ProtectedRoute />, // himoyalangan yo'l
          children: [
            {
              path: "",
              element: <Admin />,
              children: [
                {
                  index: true,
                  element: <AdminHome />,
                },
                {
                  path: "/admin/projects",
                  element: <Projects />,
                },
              ],
            },
          ],
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

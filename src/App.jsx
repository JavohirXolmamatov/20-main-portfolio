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
  Admin,
  AdminLogin,
  ProjectsService,
} from "./components/index";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Foydalanuvchi login qilgan yoki qilmaganligini tekshirish
  const isAuthenticated = false; // True bo‘lsa, dashboard ochiladi

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
          path: "/blogs",
          element: <MainBlogPage />,
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
          element: <ProtectedRoute isAuth={isAuthenticated} />, // himoyalangan yo'l
          children: [
            {
              index: true,
              element: <Admin />,
            },
            {
              path: "/admin/projectservice",
              element: "ProjectsService",
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

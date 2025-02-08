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
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Foydalanuvchi login qilgan yoki qilmaganligini tekshirish
  const isAuthenticated = true; // True bo‘lsa, dashboard ochiladi

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
          element: <ProtectedRoute isAuth={isAuthenticated} />, // himoyalangan yo'l
          children: [
            {
              index: true,
              element: <MainBlogPage />,
            },
          ],
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

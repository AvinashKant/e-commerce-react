import { createBrowserRouter } from "react-router";
import { Counter } from './features/counter/Counter';
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout/Layout";
import Login from "./features/login/Login";
import Register from "./features/register/Register";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

const publicRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "singup",
    element: <Register />
  },
  {
    path: "contact-us",
    element: <ContactUs />
  }
];

const protectedRoutes = [{
  path: "counter",
  element: <Counter />
}];

const allRoutes = [...publicRoutes, ...protectedRoutes]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: allRoutes,
  },
]);

export default router;

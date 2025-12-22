import { createBrowserRouter } from "react-router";
import { Counter } from './features/counter/Counter';
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Boards from "./pages/Boards";
import Issues from "./pages/issues/Issues";
import Login from "./pages/Login";
import Singup from './pages/Singup'


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
    element: <Singup />
  },
  {
    path: "contact-us",
    element: <ContactUs />
  },
  {
    path: "dashboard",
    element: <Dashboard />
  },
  {
    path: "Issues",
    element: <Issues />
  },
  {
    path: "boards",
    element: <Boards />
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

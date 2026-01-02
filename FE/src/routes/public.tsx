import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import Login from '../pages/Login';
import Singup from '../pages/Singup';

export const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'singup',
    element: <Singup />,
  },
  {
    path: 'contact-us',
    element: <ContactUs />,
  },
];

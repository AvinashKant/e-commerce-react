import Dashboard from '../pages/Dashboard';
import Boards from '../pages/Boards';
import Issues from '../pages/issues/Issues';
import { Counter } from '../features/counter/Counter';

export const protectedRoutes = [
  {
    path: 'counter',
    element: <Counter />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'Issues',
    element: <Issues />,
  },
  {
    path: 'boards',
    element: <Boards />,
  },
];

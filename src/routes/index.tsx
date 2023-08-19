import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Navigation } from './Navigation';
import { AboutPage } from './pages/AboutPage';
import { UsersPage } from './pages/UsersPage';
// import { HomePage } from './pages/HomePage';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
        { path: 'home', element: < ShoppingPage/>,  },
        { path: 'about', element: < AboutPage/>,  },
        { path: 'users', element: <UsersPage /> },
        { path: '*', element: <Navigate to="/home" replace/> },
    ]
  }
]);

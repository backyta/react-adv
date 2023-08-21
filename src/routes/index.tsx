import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Navigation } from './Navigation';
import { AboutPage } from './pages/AboutPage';
import { UsersPage } from './pages/UsersPage';
import { HomePage } from './pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
        { path: 'home', element: < HomePage/>,  },
        { path: 'about', element: < AboutPage/>,  },
        { path: 'users', element: <UsersPage /> },
        { path: '*', element: <Navigate to="/home" replace/> },
    ]
  }
  
]);

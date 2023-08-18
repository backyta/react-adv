import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Navigation } from './Navigation';
// import { AboutPage } from './pages/AboutPage';
// import { UsersPage } from './pages/UsersPage';
// import { HomePage } from './pages/HomePage';
import { LazyPage1,LazyPage2, LazyPage3  } from '../01-lazyload/pages';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
        { path: 'lazy1', element: < LazyPage1/>,  },
        { path: 'lazy2', element: < LazyPage2/>,  },
        { path: 'lazy3', element: <LazyPage3 /> },
        { path: '*', element: <Navigate to="/lazy1" replace/> },
    ]
  }
  
]);

import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Navigation } from './Navigation';
// import { LazyPage1,LazyPage2, LazyPage3  } from '../01-lazyload/pages';
import { routes } from "./routes";

const routesChildren = routes.map( route =>(
  { path: route.path , element: <route.Component /> }
))

export const router = createBrowserRouter([

  {
    path: '/',
    element: <Navigation />,
    children: routesChildren
    // { path: routes[0].path , element: < LazyPage1/>,  },
    // { path: 'lazy-2', element: < LazyPage2/>,  },
    // { path: 'lazy-3', element: <LazyPage3 /> },
  },
  { path: '/*', element: <Navigate to={ routes[0].to } replace/> },

  
]);

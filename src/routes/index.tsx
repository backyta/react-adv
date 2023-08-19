import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import { routes } from "./routes";

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';


const routesChildren = routes.map( route =>(
  ( route.path === '/lazyload/*') 
  ? { path: route.path , element: <route.Component />, children:[
    { path: 'lazy1' , element: <LazyPage1 />,  },
    { path: 'lazy2', element: <LazyPage2 />,  },
    { path: 'lazy3', element: <LazyPage3 /> },
    { path: '*', element: <Navigate to="lazy1" replace/> },
  ]}
  :{ path: route.path , element: <route.Component /> }
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

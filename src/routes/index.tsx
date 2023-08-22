import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Navigation } from './Navigation';
// import { AboutPage } from './pages/AboutPage';
import { UsersPage } from './pages/UsersPage';
// import { HomePage } from './pages/HomePage';
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstractation  } from '../03-forms/pages';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
        { path: 'register', element: <RegisterPage/>,  },
        { path: 'formik-basic', element: < FormikBasicPage/>,  },
        { path: 'formik-yup', element: < FormikYupPage/>,  },
        { path: 'formik-components', element: < FormikComponents/>,  },
        { path: 'formik-abstractation', element: < FormikAbstractation/>,  },
        { path: 'users', element: <UsersPage /> },
        { path: '*', element: <Navigate to="/home" replace/> },
    ]
  }
  
]);

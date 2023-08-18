import { router } from "./router";
import { RouterProvider } from 'react-router';

export const App = () => {

  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}


import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./pages/errors/errorPage.tsx";
import Root from "./pages/Root.tsx";

const router = createBrowserRouter([
    {
        path: "/", element: <Root/>,
        errorElement: <ErrorPage/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)

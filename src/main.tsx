import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/errors/errorPage.tsx";
import router from "./Router.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider
            router={router}
            fallbackElement={<ErrorPage/>}
        />
    </React.StrictMode>,
)

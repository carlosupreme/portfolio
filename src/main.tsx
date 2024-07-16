import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Projects from "./pages/Projects.tsx";
import ErrorPage from "./pages/errors/errorPage.tsx";
import Blog from "./pages/Blog.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                path: "",
                element: <Home/>,
            },
            {
                path: "me",
                element: <AboutMe/>,
            },
            {
                path: "projects",
                element: <Projects/>,
            },
            {
                path: "blog",
                element: <Blog/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider
            router={router}
            fallbackElement={<ErrorPage/>}
        />
    </React.StrictMode>,
)

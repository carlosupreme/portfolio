import {createBrowserRouter} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Projects from "./pages/Projects.tsx";
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

export default router
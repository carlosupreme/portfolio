import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.tsx";

export default function Layout() {
    return (
        <div className="h-screen w-full dark:bg-dark-profound">
            <div className="max-w-2xl mx-auto w-full p-5 flex flex-col gap-4">
                <Navbar/>
                <main className="p-4 dark:text-dark-font dark:bg-dark w-full rounded-lg">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}
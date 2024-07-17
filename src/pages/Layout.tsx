import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.tsx";

export default function Layout() {
    return (
        <div className="min-h-screen w-full dark:bg-dark-profound">
            <div className="max-w-2xl mx-auto w-full p-2 flex flex-col gap-2">
                <Navbar/>

                <main className="pt-8 px-2 pb-2 dark:text-dark-font dark:bg-dark w-full rounded-xl border border-dark-border">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}
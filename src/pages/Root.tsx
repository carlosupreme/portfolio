import me from "../assets/me-memoji.png";
import Navbar from "../components/Navbar.tsx";

export default function Root() {
    return (
        <div className="h-screen w-full dark:bg-dark-profound">
            <div className="max-w-2xl mx-auto w-full p-5 flex flex-col gap-4">
                <Navbar/>
                <div className="p-4 dark:bg-dark w-full rounded-lg">
                    <img src={me} alt="Me" className={"w-32 h-32 rounded-full object-cover"}/>
                </div>
            </div>
        </div>
    );
}
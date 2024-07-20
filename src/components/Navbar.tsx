import Theme from "./Theme.tsx";
import NavigationButton from "./NavigationButton.tsx";
import LangButton from "./LangButton.tsx";

export default function Navbar() {
    return (
        <div className="sticky top-0 w-full max-w-2xl z-10">
            <div className="dark:bg-dark dark:text-dark-font border dark:border-dark-border px-4 flex items-center justify-between">
                <div className="flex gap-2 items-center py-2.5">
                    <NavigationButton
                        route={"/"}
                        icon={"fa-solid fa-house"}/>

                    <NavigationButton
                        route={"/me"}
                        icon={"fas fa-user"}/>

                    <NavigationButton
                        route={"/projects"}
                        icon={"fa-solid fa-briefcase"}/>

                    <NavigationButton
                        route={"/blog"}
                        icon={"fa-solid fa-book-open-reader"}/>
                </div>

                <div className="flex gap-4">
                    <Theme/>
                    <LangButton/>
                </div>
            </div>
        </div>
    );
}
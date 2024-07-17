import Theme from "./Theme.tsx";
import HireMeButton from "./HireMeButton.tsx";
import NavigationButton from "./NavigationButton.tsx";

export default function Navbar() {
    return (
        <div className="dark:bg-dark dark:text-dark-font border dark:border-dark-border rounded-lg px-4 flex items-center justify-between">
            <div className="flex gap-4 items-center py-3">
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
                <HireMeButton/>
            </div>
        </div>
    );
}
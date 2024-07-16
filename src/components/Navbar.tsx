import {Link} from "react-router-dom";
import Theme from "./Theme.tsx";
import HireMeButton from "./HireMeButton.tsx";

type NavigationButtonProps = {
    icon: string, route: string
}

function NavigationButton({icon, route}: NavigationButtonProps) {
    return (
        <Link to={route}
              className="dark:hover:bg-dark-nav-bg-button-hover dark:text-dark-nav-button dark:hover:text-white
              inline-flex items-center justify-center w-8 h-8
              transition-colors
              rounded-full"
        >
            <i className={`${icon} `}></i>
        </Link>
    );
}

export default function Navbar() {
    return (
        <div className="dark:bg-dark dark:text-dark-font rounded-lg px-4 flex items-center justify-between">
            <div className="flex gap-4 items-center py-4">
                <NavigationButton
                    route={"/"}
                    icon={"fa-solid fa-house"}/>

                <NavigationButton
                    route={"/"}
                    icon={"fas fa-user"}/>

                <NavigationButton
                    route={"/"}
                    icon={"fa-solid fa-briefcase"}/>

                <NavigationButton
                    route={"/"}
                    icon={"fa-solid fa-book-open-reader"}/>
            </div>

           <div className="flex gap-4">
               <Theme />
               <HireMeButton />
           </div>
        </div>
    );
}
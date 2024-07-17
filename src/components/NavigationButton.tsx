import {NavLink} from "react-router-dom";

export default function NavigationButton({icon, route}: { icon: string, route: string }) {
    const activeClasses = "dark:bg-dark-nav-bg-button-hover dark:text-white"
    const pendingClasses = "px-2 py-1 aspect-square dark:hover:bg-dark-nav-bg-button-hover dark:text-dark-nav-button dark:hover:text-white inline-flex items-center justify-center transition-colors rounded-full"
    return (
        <NavLink
            to={route}
            className={({isActive}) => `${isActive && activeClasses} ${pendingClasses}`}
        >
            <i className={`${icon}`}></i>
        </NavLink>
    );
}

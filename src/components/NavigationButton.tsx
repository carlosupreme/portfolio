import {NavLink} from "react-router-dom";

export default function NavigationButton({icon, route}: { icon: string, route: string }) {
    const activeClasses = "dark:bg-dark-nav-bg-button-hover dark:text-white"
    const pendingClasses = "dark:hover:bg-dark-nav-bg-button-hover dark:text-dark-nav-button dark:hover:text-white inline-flex items-center justify-center w-8 h-8 transition-colors rounded-full"
    return (
        <NavLink
            to={route}
            className={({isActive}) => `${isActive && activeClasses} ${pendingClasses}`}
        >
            <i className={`${icon} `}></i>
        </NavLink>
    );
}

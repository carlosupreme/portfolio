import {Link} from "react-router-dom";

export default function ViewMoreButton({link}: { link: string }) {
    return (
        <Link to={link}
              className="px-2.5 py-2 border border-dark-border rounded-lg dark:bg-dark-bg-item dark:text-white cursor-pointer dark:hover:ring-4 dark:hover:ring-dark-profound transition-all"
        >
            View all <i className="fa-solid fa-arrow-right ml-1"></i></Link>
    )
}
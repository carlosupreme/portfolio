import {ReactNode} from "react";

export default function Item({children}: { children: ReactNode }) {
    return (
        <article className="dark:bg-dark-bg-item p-4 w-full rounded-xl">
            {children}
        </article>
    )
}

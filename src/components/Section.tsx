import BulletTitle from "./BulletTitle.tsx";
import ViewMoreButton from "./ViewMoreButton.tsx";
import {ReactNode} from "react";

type SectionProps = {
    children: ReactNode;
    title: string;
    viewMoreLink: string | null;
}

export default function Section({children, title, viewMoreLink}: SectionProps) {
    return (
        <section className="dark:bg-dark-bg-section p-4 w-full flex flex-col gap-4 rounded-xl">
            <div className="flex justify-between items-center">
                <BulletTitle text={title}/>
                {viewMoreLink && <ViewMoreButton link={viewMoreLink}/>}
            </div>
            {children}
        </section>
    )
}
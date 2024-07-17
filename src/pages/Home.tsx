import me from "../assets/me-memoji.png";
import HireMeButton from "../components/HireMeButton.tsx";
import CopyEmail from "../components/CopyEmailButton.tsx";

export default function Home() {
    return (
        <div className="dark:text-dark-font flex flex-col gap-5">
            <div className="flex items-center justify-between px-4 w-full">
                <div className="flex gap-2 items-center">
                    <div className="dark:bg-dark-bullet w-2 h-2 rounded-full"></div>
                    <h2 className="text-xl accent-dark-font-title text-dark-font-title">Software developer</h2>
                </div>

                <div className="bg-green-900 w-5 h-5 rounded-full grid place-items-center">
                    <div className="bg-green-500 w-1.5 h-1.5 rounded-full"></div>
                </div>
            </div>

            <div className=" w-full flex flex-col items-center justify-center">
                <div className="border dark:border-white/10 dark:bg-dark-bg-section rounded-full p-2 my-3">
                    <img src={me} alt="Me" className="w-36 h-36 rounded-full object-cover"/>
                </div>
                <h1 className="dark:text-white font-semibold text-3xl mb-3">I'm Carlos Sosa</h1>
                <h4>Web developer from Oaxaca, México.</h4>
                <h4>Currently studying engineering.</h4>

                <div className="flex gap-4 items-center mt-4">
                    <HireMeButton/>
                    <CopyEmail/>
                </div>
            </div>

            <section className="dark:bg-dark-bg-section p-4 w-full flex flex-col gap-4 rounded-xl">
                <article className="dark:bg-dark-bg-item h-32 w-full rounded-xl">

                </article>

                <article className="dark:bg-dark-bg-item h-32 w-full rounded-xl">

                </article>
            </section>
        </div>
    )
}
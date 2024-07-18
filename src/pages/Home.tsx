import me from "../assets/me-memoji.png";
import HireMeButton from "../components/HireMeButton.tsx";
import CopyEmail from "../components/CopyEmailButton.tsx";
import BulletTitle from "../components/BulletTitle.tsx";
import Item from "../components/Item.tsx";
import Section from "../components/Section.tsx";
import ProjectPreview from "../components/projects/ProjectPreview.tsx";

export default function Home() {
    return (
        <div className="dark:text-dark-font flex flex-col gap-5">
            <div className="flex items-center justify-between px-4 w-full">
                <BulletTitle text={"Software developer"}/>
                <div className="bg-green-900 w-5 h-5 rounded-full grid place-items-center">
                    <div className="bg-green-500 w-1.5 h-1.5 rounded-full"></div>
                </div>
            </div>

            <div className="text-lg w-full flex flex-col items-center justify-center">
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

            <Section
                title={"My projects"}
                viewMoreLink={"/projects"}
            >

                <ProjectPreview project={{
                    id: "1",
                    name: "FootballPass | Soccer field manager",
                    description: "A web application to manage leagues, seasons, teams and player attendance in matches",
                    skills: ["php", "laravel", "mysql", "figma", "alpinejs", "tailwindcss"]
                }}/>

                <ProjectPreview project={{
                    id: "2",
                    name: "Problem Details Http",
                    description: "A library to handle problem details in HTTP responses as defined in RFC 7807",
                    skills: ["typescript", "npm", "jest", "webstorm", "ubuntu"]
                }}/>
            </Section>
        </div>
    )
}
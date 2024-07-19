import me from "../assets/me-memoji.png";
import HireMeButton from "../components/HireMeButton.tsx";
import CopyEmail from "../components/CopyEmailButton.tsx";
import BulletTitle from "../components/BulletTitle.tsx";
import Section from "../components/Section.tsx";
import ProjectPreview from "../components/projects/ProjectPreview.tsx";
import ExperiencePreview from "../components/experiences/ExperiencePreview.tsx";
import {Pin} from "lucide-react";

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
                <h4>Software developer from Oaxaca, México.</h4>
                <h4>Currently studying engineering.</h4>

                <div className="flex gap-4 items-center mt-4">
                    <HireMeButton/>
                    <CopyEmail/>
                </div>
            </div>

            <Section title={"My projects"} viewMoreLink={"/projects"}>
                <h2 className="dark:text-dark-font font-semibold pl-2">Latest</h2>

                <ProjectPreview project={{
                    id: "3",
                    name: "Arena Split",
                    description: "Typescript application for splitting expenses among friends and groups, agnostic of any delivery mechanism. But also an API rest",
                    skills: ["typescript", "npm", "vitest", "express", "nodejs"]
                }}/>

                <ProjectPreview project={{
                    id: "1",
                    name: "FootballPass | Soccer field manager",
                    description: "A web application to manage leagues, seasons, teams and player attendance in matches.",
                    skills: ["php", "laravel", "mysql", "alpinejs", "tailwindcss"]
                }}/>

                <ProjectPreview project={{
                    id: "2",
                    name: "Problem Details Http",
                    description: "A library to handle problem details in HTTP responses as defined in RFC 7807",
                    skills: ["typescript", "npm", "jest"]
                }}/>
            </Section>

            <Section title={"My experiences"} viewMoreLink={"/blog"}>

                <div className="flex items-center gap-1">
                    <Pin className="w-4 h-4" />
                    <h2 className="dark:text-dark-font font-semibold">Pinned</h2>
                </div>

                <ExperiencePreview
                    experience={{
                        podium: "gold",
                        title: 'Internet Computer Protocol Hackathon',
                        description: "I participated in a 2-days Hackathon with the winning project VOTEICP. Using the ICP blockchain to create a voting system.",
                        skills: ["typescript", "nodejs", "docker", "express", "ubuntu"],
                        image: "icp-1.jpeg",
                        when: "From 15 Jun 2024 to 16 Jun 2024",
                        where: "Instituto Tecnologico de Oaxaca, Oaxaca, México"
                    }}
                />

                <ExperiencePreview
                    experience={{
                        podium: "silver",
                        title: 'Universidad La Salle Hackathon',
                        description: "I participated in a 24hrs Hackathon with the second place winning project PipeFix. Developing a system for a plumbing company.",
                        skills: ["nodejs", "mongodb", "express", "windows", "postman"],
                        image: "la-salle-1.jpg",
                        when: "From 23 May 2024 to 24 May 2024",
                        where: "Universidad La Salle Oaxaca, Oaxaca, México"
                    }}
                />

                <ExperiencePreview
                    experience={{
                        podium: "bronze",
                        title: 'Jalisco Talent Land Genius Arena Hackathon',
                        description: "I participated in the Talent Hackathon with the third place winning project ArrowPass. Developing a system for a bus company.",
                        skills: ["nodejs", "mongodb", "express", "ubuntu", "postman"],
                        image: "talent-1.jpg",
                        when: "From 01 Apr 2024 to 04 Apr 2024",
                        where: "EXPO Guadalajara, Jalisco, México"
                    }}
                />

            </Section>
        </div>
    )
}
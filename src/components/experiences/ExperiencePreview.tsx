import {ExperiencePreview as Experience} from "../../models/ExperiencePreview.ts";
import {Link} from "react-router-dom";
import Skills from "../projects/Skills.tsx";
import Item from "../Item.tsx";
import {CalendarDays, MapPinned} from "lucide-react";
import Medal from "./Medal.tsx";

export default function ExperiencePreview({experience}: { experience: Experience }) {
    return (
        <div className="flex flex-col rounded-xl dark:bg-dark-bg-item group">
            <div className="w-full h-40 object-cover relative">
                <Medal podium={experience.podium}/>
                <img src={`./img/experiences/${experience.image}`} alt={experience.title}
                     className="w-full h-full object-cover rounded-t-lg"/>
            </div>
            <Item>
                <div className="flex text-lg flex-col gap-3 w-full">
                    <Link to={`/projects/${experience.title}`}>
                        <h2 className="hover:underline font-semibold dark:text-white">{experience.title}</h2>
                    </Link>

                    <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-green-700"/>
                        <p className="text-gray-400 text-sm">{experience.when}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPinned className="w-4 h-4 text-pink-700"/>
                        <p className="text-gray-400 text-sm">{experience.where}</p>
                    </div>

                    <p className="text-justify">{experience.description}</p>

                    <div className="flex gap-4 justify-between items-center w-full mt-1">
                        <p className="min-w-fit text-sm">I used </p> <Skills skills={experience.skills}/>
                    </div>
                </div>
            </Item>
        </div>
    )
}
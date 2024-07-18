import {Project} from "../../models/Project.ts";
import Skills from "./Skills.tsx";
import {Link} from "react-router-dom";
import Item from "../Item.tsx";

export default function ProjectPreview({project}: { project: Project }) {
    return (
        <Item>
            <div className="flex text-lg flex-col gap-3 w-full">
                <Link to={`/projects/${project.id}`}>
                    <h2 className="hover:underline font-semibold dark:text-white">{project.name}</h2>
                </Link>
                <p>{project.description}</p>
                <div className="flex gap-4 justify-between items-center w-full mt-1">
                    <p className="min-w-fit text-sm">Built with </p> <Skills skills={project.skills}/>
                </div>
            </div>
        </Item>
    )
}
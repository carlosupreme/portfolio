export default function Skills({skills}: { skills: string[] }) {
    const skillsAsText = skills.join(",");
    const currentTheme = "dark";

    return (
        <div>
            <img className="w-full" src={`https://skillicons.dev/icons?theme=${currentTheme}&i=${skillsAsText}`}/>
        </div>
    )
}


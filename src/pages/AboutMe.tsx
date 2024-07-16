import me from "../assets/me-memoji.png";

export default function AboutMe() {
    return (
        <div>
            <h2>About me</h2>
            <img src={me} alt="Me" className={"w-32 h-32 rounded-full object-cover"}/>
        </div>
    )
}
import me from "../assets/me-memoji.png";

export default function Home() {
    return (
        <div>
            <h2>Home section</h2> <br/>
            <img src={me} alt="Me" className={"w-32 h-32 rounded-full object-cover"}/>
        </div>
    )
}
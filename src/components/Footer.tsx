
import BulletTitle from "./BulletTitle.tsx";
import ContactMeButton from "./ContactMeButton.tsx";


export default function Footer() {
    return (
        <footer className="flex flex-col gap-2">
            <div className="py-8 px-2 flex flex-col gap-2 items-center justify-center dark:text-dark-font">
                <h2 className="font-bold text-3xl dark:text-white text-center"> Get in touch </h2>
                <h3 className="text-lg text-center">Let's improve user experience developing awesome software</h3>
                <div className="flex justify-center items-center mt-1">
                    <ContactMeButton/>
                </div>
            </div>

            <SocialMedia/>
            <Copyright/>
        </footer>
    )
}

function SocialMedia() {

    const socialMediaLinks = [
        {
            icon: "github",
            link: "https://github.com/carlosupreme"
        },
        {
            icon: "instagram",
            link: "https://instagram.com/carlosuprem"
        },
        {
            icon: "linkedin-in",
            link: "https://linkedin.com/in/carlosupreme"
        },
        {
            icon: "youtube",
            link: "https://youtube.com/@carlosupremedev"
        }
    ]


    return (
        <div className="w-full rounded-xl dark:bg-dark-bg-section py-6 px-4 flex justify-between">
            <BulletTitle text={"Follow Me"}/>
            <div className="flex gap-1">
                {socialMediaLinks.map((link) => (
                    <SocialMediaButton icon={link.icon} link={link.link}/>
                ))}
            </div>
        </div>
    )
}

function SocialMediaButton({icon, link}: { icon: string, link: string }) {
    return (
        <a href={link}
           target="_blank"
           className="dark:text-white cursor-pointer dark:hover:ring-2 dark:hover:ring-dark-button-hover-ring transition-all border border-dark-border dark:bg-dark rounded-full text-center w-10 h-10 grid place-items-center"
        >
            <i className={`fa-brands fa-${icon} fa-lg`}></i>
        </a>
    )
}

function Copyright() {
    const email = "carlosupremedev@gmail.com"
    return (
        <h5 className="text-sm w-full p-4 text-center">
            &copy; {new Date().getFullYear()} - All rights reserved - Made by &nbsp;
            <a className="underline text-white" href={`mailto:${email}`}>
                Carlos Sosa
            </a>
        </h5>
    )
}

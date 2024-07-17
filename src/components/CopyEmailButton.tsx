import {useState} from "react";

export default function CopyEmail() {
    const [clicked, setClicked] = useState(false)

    const copyEmailToClipboard = () => {
        const email = "carlosupremedev@gmail.com";
        navigator.clipboard.writeText(email).then(() => setClicked(true));
        setTimeout(() => setClicked(false), 2000);
    }

    return (
        <button
            disabled={clicked}
            onClick={copyEmailToClipboard}
            className="disabled:opacity-50 dark:disabled:ring-0 px-2.5 py-2 border border-dark-border rounded-xl text-sm dark:text-white cursor-pointer dark:hover:ring-4 dark:hover:ring-dark-profound transition-all">
            <i className="fa-solid fa-copy mr-2"></i>
            {clicked ? "Copied" : "Copy Email"}
        </button>
    )
}
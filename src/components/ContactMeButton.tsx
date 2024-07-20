import {MessageCircleMore} from "lucide-react";

export default function ContactMeButton(){
    return (
        <button className="
        dark:hover:ring-4 dark:hover:ring-dark-profound transition-all
        dark:bg-dark-bg-button dark:text-white py-2 px-2.5 rounded-lg text-sm font-bold my-2">
            <MessageCircleMore className="inline mr-1 w-5" /> Contact me
        </button>
    )
}
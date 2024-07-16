function isDarkMode() {
    return true;
}

export default function Theme() {
    return (
        <div className="flex items-center gap-2">
            {
                isDarkMode()
                    ? <i className="fa-solid fa-sun"></i>
                    : <i className="fa-solid fa-moon"></i>
            }
        </div>
    )
}
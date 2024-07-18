export default function BulletTitle({text}: { text: string }) {
    return (
        <div className="flex gap-2 items-center">
            <div className="dark:bg-dark-bullet w-2 h-2 rounded-full"></div>
            <h2 className="text-dark-font-title font-bold text-lg">{text}</h2>
        </div>
    )
}
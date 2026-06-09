export default function Badge({ children, className = "" }) {
    return (
        <span
            className={`inline-flex justify-center items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm text-green-950 bg-green-500/5 border border-green-500 shadow-lg shadow-green-600/10 ${className}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            {children}
        </span>
    )
}

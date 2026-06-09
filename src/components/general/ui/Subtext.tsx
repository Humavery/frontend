export default function Subtext({ children, className = "" }) {
    return <p className={`text-sm sm:text-md text-center text-neutral-700 leading-relaxed ${className}`}>{children}</p>
}

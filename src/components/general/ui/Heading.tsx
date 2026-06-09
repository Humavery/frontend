export default function Heading({ children, className = "" }) {
    return (
        <h1
            className={`text-5xl sm:text-7xl font-bold text-center text-neutral-950 tracking-tight leading-tight ${className}`}>
            {children}
        </h1>
    )
}

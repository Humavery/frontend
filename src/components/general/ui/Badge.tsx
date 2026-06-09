import type { IBaseComponentOptions } from "@/humavery/libs/models/components/general/interfaces/IBaseComponentOptions"
import type { JSX } from "react"

/**
 * @summary The badge component.
 * @description This component is used to display a badge.
 * @param props - The properties of the badge component.
 * @see {@link IBaseComponentOptions} for the properties of the component.
 * @returns The JSX element of the badge component.
 */
const Badge = ({ children, className = "" }: IBaseComponentOptions): JSX.Element => {
    return (
        <span
            className={`inline-flex justify-center items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm text-green-950 bg-green-500/5 border border-green-500 shadow-lg shadow-green-600/10 ${className}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            {children}
        </span>
    )
}

export default Badge

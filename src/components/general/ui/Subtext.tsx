import type { IBaseComponentOptions } from "@/humavery/libs/models/components/general/interfaces/IBaseComponentOptions"
import type { JSX } from "react"

/**
 * @summary The subtext component.
 * @description This component is used to display a subtext.
 * @param props - The properties of the subtext component.
 * @see {@link IBaseComponentOptions} for the properties of the component.
 * @returns The JSX element of the subtext component.
 */
const Subtext = ({ children, className = "" }: IBaseComponentOptions): JSX.Element => {
    return <p className={`text-sm sm:text-md text-center text-neutral-700 leading-relaxed ${className}`}>{children}</p>
}

export default Subtext

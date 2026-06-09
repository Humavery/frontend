import type { IBaseComponentOptions } from "@/humavery/libs/models/components/general/interfaces/IBaseComponentOptions"
import type { JSX } from "react"

/**
 * @summary The heading component.
 * @description This component is used to display a heading.
 * @param props - The properties of the heading component.
 * @see {@link IBaseComponentOptions} for the properties of the component.
 * @returns The JSX element of the heading component.
 */
const Heading = ({ children, className = "" }: IBaseComponentOptions): JSX.Element => {
    return (
        <h1
            className={`text-5xl sm:text-7xl font-medium text-center text-neutral-950 tracking-tight leading-tight ${className}`}>
            {children}
        </h1>
    )
}

export default Heading

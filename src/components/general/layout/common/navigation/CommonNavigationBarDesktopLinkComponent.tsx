import { ICommonNavigationBarDesktopLinkComponentOptions } from "@/humavery/libs/models/components/general/layout/common/navigation/interfaces/ICommonNavigationBarDesktopLinkComponentOptions"
import { Link } from "@/humavery/libs/translations/Navigation"
import { JSX } from "react/jsx-runtime"
import { cn } from "@/humavery/libs/utilities/cn"

/**
 * @summary The common navigation bar desktop link component.
 * @description This component is used to display a link in the common navigation bar on desktop devices.
 * @param props - The properties of the component.
 * @see {@link ICommonNavigationBarDesktopLinkComponentOptions} for the properties of the component.
 * @returns The common navigation bar desktop link component.
 */
const CommonNavigationBarDesktopLinkComponent = ({
    label,
    href,
    isActive,
}: ICommonNavigationBarDesktopLinkComponentOptions): JSX.Element => {
    return (
        <Link
            href={href}
            className={cn(
                "px-2 py-1 text-center max-lg:text-left",
                isActive
                    ? "bg-primary"
                    : "bg-transparent text-inactive hover:text-foreground transition-colors duration-300 ease-in-out",
            )}>
            {label}
        </Link>
    )
}

export default CommonNavigationBarDesktopLinkComponent

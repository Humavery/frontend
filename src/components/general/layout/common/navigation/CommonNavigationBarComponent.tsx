"use client"
import { useState, type JSX } from "react"
import { Link } from "@/humavery/libs/translations/Navigation"
import CommonNavigationBarDesktopLinkComponent from "./CommonNavigationBarDesktopLinkComponent"
import { usePathname } from "next/navigation"
import { MenuIcon, X } from "lucide-react"
import { cn } from "@/humavery/libs/utilities/cn"

/**
 * @summary The common navigation bar component.
 * @description This component is used to display the common navigation bar.
 * @returns The common navigation bar component.
 */
const CommonNavigationBarComponent = (): JSX.Element => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleMobileMenu = (): void => setIsMobileMenuOpen((current: boolean): boolean => !current)

    const rawPathName: string = usePathname()
    const pathname: string = rawPathName.split("/").slice(2).join("/") || "/"
    const path: string = pathname.startsWith("/") ? pathname : `/${pathname}`

    return (
        <>
            <nav className="w-full md:px-[10%] px-8 py-4 flex items-center justify-between">
                <Link href="/">
                    <b>Humavery</b>
                </Link>

                <section className="flex items-center justify-end gap-8 max-md:hidden">
                    <ul className="flex items-center justify-center gap-2">
                        <CommonNavigationBarDesktopLinkComponent label="Cennik" href="/" isActive={path === "/"} />
                        <CommonNavigationBarDesktopLinkComponent
                            label="Kontakt"
                            href="/contact"
                            isActive={path === "/contact"}
                        />
                    </ul>
                    <div className="w-px h-8 bg-gray-200/20"></div>
                    <Link
                        href="/"
                        className="px-4 py-2 text-center rounded-full bg-linear-to-r from-[#4996ff] to-[#9649ff]">
                        Zaloguj się
                    </Link>
                </section>
                <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </nav>
            <nav
                className={cn(
                    "md:hidden fixed inset-x-0 top-[57px] z-50 bg-background flex flex-col items-center gap-4 py-8 border-b border-gray-200/20 transition-all duration-200 ease-out px-8",
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto translate-y-0"
                        : "opacity-0 pointer-events-none -translate-y-2",
                )}>
                <ul className="w-full flex flex-col items-start gap-4">
                    <CommonNavigationBarDesktopLinkComponent label="Cennik" href="/" isActive={path === "/"} />
                    <CommonNavigationBarDesktopLinkComponent
                        label="Kontakt"
                        href="/contact"
                        isActive={path === "/contact"}
                    />
                </ul>
                <div className="w-full h-px bg-gray-200/20" />
                <Link
                    href="/"
                    className="w-full px-6 py-3 text-center rounded-full bg-linear-to-r from-[#4996ff] to-[#9649ff]">
                    Zaloguj się
                </Link>
            </nav>
        </>
    )
}

export default CommonNavigationBarComponent

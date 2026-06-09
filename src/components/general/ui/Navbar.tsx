"use client"

import { useState } from "react"
import Image from "next/image"
import { Link } from "@/humavery/libs/translations/Navigation"

type NavLink = {
    label: string
    href: string
}

const NAV_LINKS: NavLink[] = [
    { label: "Strona główna", href: "/" },
    { label: "O nas", href: "/o-nas" },
    { label: "Usługi", href: "/uslugi" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontakt", href: "/kontakt" },
]

const HOVER_STYLE = {
    background: "rgba(107,114,216,0.10)",
    color: "#6b72d8",
}

const DEFAULT_LINK_STYLE = {
    background: "transparent",
    color: "#4b4e6a",
}

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl rounded-2xl px-5 py-3 flex items-center justify-between"
            style={{
                background: "rgba(255,255,255,0.60)",
                border: "1.5px solid rgba(209,213,240,0.75)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow: "0 4px 32px 0 rgba(100,110,200,0.10)",
            }}>
            {/* Logo */}
            <Image src="/logos/logo-blue.png" alt="Humavery" width={32} height={32} />

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="px-3 py-1.5 rounded-xl text-sm transition-colors duration-150"
                            style={DEFAULT_LINK_STYLE}
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, HOVER_STYLE)}
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, DEFAULT_LINK_STYLE)}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2">
                <Link
                    href="/logowanie"
                    className="px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-150"
                    style={DEFAULT_LINK_STYLE}
                    onMouseEnter={(e) =>
                        Object.assign(e.currentTarget.style, {
                            background: "rgba(107,114,216,0.08)",
                            color: "#6b72d8",
                        })
                    }
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, DEFAULT_LINK_STYLE)}>
                    Logowanie
                </Link>
                <Link
                    href="/rejestracja"
                    className="px-4 py-2 rounded-xl text-sm font-medium text-white transition-colors duration-150 bg-blue-500">
                    Zarejestruj się
                </Link>
            </div>

            {/* Mobile hamburger */}
            <button
                className="md:hidden flex flex-col gap-[5px] p-2 rounded-xl"
                onClick={() => setOpen((v) => !v)}
                aria-label="Otwórz menu"
                aria-expanded={open}>
                {[
                    open ? "translateY(7px) rotate(45deg)" : "none",
                    "none",
                    open ? "translateY(-7px) rotate(-45deg)" : "none",
                ].map((transform, i) => (
                    <span
                        key={i}
                        className="block h-0.5 w-5 rounded transition-all duration-200"
                        style={{
                            background: "#6b72d8",
                            transform,
                            opacity: i === 1 && open ? 0 : 1,
                        }}
                    />
                ))}
            </button>

            {/* Mobile dropdown */}
            {open && (
                <div
                    className="absolute top-[calc(100%+8px)] left-0 right-0 rounded-2xl py-3 px-4 flex flex-col gap-1 md:hidden"
                    style={{
                        background: "rgba(255,255,255,0.90)",
                        border: "1.5px solid rgba(209,213,240,0.75)",
                        backdropFilter: "blur(18px)",
                        WebkitBackdropFilter: "blur(18px)",
                        boxShadow: "0 8px 32px 0 rgba(100,110,200,0.12)",
                    }}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="px-3 py-2 rounded-xl text-sm transition-colors duration-150"
                            style={DEFAULT_LINK_STYLE}
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, HOVER_STYLE)}
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, DEFAULT_LINK_STYLE)}>
                            {link.label}
                        </Link>
                    ))}

                    <div
                        className="mt-2 pt-3 flex flex-col gap-2"
                        style={{ borderTop: "1px solid rgba(209,213,240,0.6)" }}>
                        <Link
                            href="/logowanie"
                            onClick={() => setOpen(false)}
                            className="w-full text-center px-4 py-2 rounded-xl text-sm font-medium"
                            style={{
                                color: "#4b4e6a",
                                border: "1.5px solid rgba(209,213,240,0.8)",
                            }}>
                            Logowanie
                        </Link>
                        <Link
                            href="/rejestracja"
                            onClick={() => setOpen(false)}
                            className="w-full text-center px-4 py-2 rounded-xl text-sm font-medium text-white bg-blue-500">
                            Zarejestruj się
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

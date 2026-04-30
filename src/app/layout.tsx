import type { Metadata, Viewport } from "next"
import type { IChildren } from "../libs/models/components/general/interfaces/IChildren"
import type { JSX } from "react"
import { Geist } from "next/font/google"
import "@/humavery/styles/GlobalStyles.css"

/**
 * @summary The font for the website.
 * @description This is the font that will be used for the website.
 */
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

/**
 * @summary The metadata for the website.
 * @description Metadata information for the website (SEO).
 */
const metadata: Metadata = {
    title: "Humavery",
}

/**
 * @summary The viewport for the website.
 * @description Viewport information for the website (accessibility).
 */
const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
    colorScheme: "light",
    themeColor: "#000000",
}

/**
 * @summary The root layout for the website.
 * @description This is the root layout for the website. It is the parent component for all pages.
 */
function RootLayout({ children }: IChildren): JSX.Element {
    return (
        <html lang="en" className={`${geistSans.variable} h-full antialiased`} suppressHydrationWarning>
            <body>{children}</body>
        </html>
    )
}

export { metadata, viewport }
export default RootLayout

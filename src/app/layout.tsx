import type { Metadata, Viewport } from "next"
import type { IChildren } from "../libs/models/components/general/interfaces/IChildren"
import type { JSX } from "react"
import type { NextFontWithVariable } from "next/dist/compiled/@next/font"
import { ThemeProvider } from "@wrksz/themes/next"
import { Geist } from "next/font/google"
import { headers } from "next/headers"
import { routing } from "@/humavery/libs/translations/Routing"
import "@/humavery/styles/GlobalStyles.css"
import { EnvironmentVariables } from "../libs/globals/EnvironmentVariables"

/**
 * @summary The font for the website.
 * @description This is the font that will be used for the website.
 */
const geistSans: NextFontWithVariable = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

/**
 * @summary The metadata for the website.
 * @description Metadata information for the website (SEO).
 */
const metadata: Metadata = {
    metadataBase: new URL(EnvironmentVariables.WEBSITE_ENDPOINT_URL.href),
    title: "Humavery",
    icons: {
        icon: [
            {
                url: "/assets/icons/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                url: "/assets/icons/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        apple: [{ url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
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
 * @description Wraps all routes. `lang` comes from the next-intl proxy (`X-NEXT-INTL-LOCALE`).
 */
async function RootLayout({ children }: IChildren): Promise<JSX.Element> {
    const headerLocale: string | null = (await headers()).get("X-NEXT-INTL-LOCALE")
    const lang: string = headerLocale ?? routing.defaultLocale

    return (
        <html lang={lang} className={`${geistSans.className} h-full antialiased`} suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange storage="hybrid">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}

export { metadata, viewport }
export default RootLayout

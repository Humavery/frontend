import type { JSX } from "react"
import type { Metadata } from "next"
import CommonNavigationBarComponent from "@/humavery/components/general/layout/common/navigation/CommonNavigationBarComponent"

/**
 * @summary The metadata for the home page.
 * @description Metadata information for the home page (SEO).
 */
const metadata: Metadata = {
    title: "Humavery",
    description:
        "Humavery przywraca internet ludziom - filtrując AI-slop w czasie rzeczywistym, zarówno w mediach społecznościowych, jak i w recenzjach produktów e-commerce.",
    openGraph: {
        title: "Humavery",
        description:
            "Humavery przywraca internet ludziom - filtrując AI-slop w czasie rzeczywistym, zarówno w mediach społecznościowych, jak i w recenzjach produktów e-commerce.",
        images: [
            {
                url: "/assets/images/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
    },
}

/**
 * @summary The home page.
 * @description This page is used to display the home page.
 * @returns The home page.
 */
function HomePage(): JSX.Element {
    return (
        <>
            <CommonNavigationBarComponent />
        </>
    )
}

export { metadata }
export default HomePage

import type { JSX } from "react"
import CommonNavigationBarComponent from "@/humavery/components/general/layout/common/navigation/CommonNavigationBarComponent"

/**
 * @summary The contact page.
 * @description This page is used to display the contact page.
 * @returns The contact page.
 */
function ContactPage(): JSX.Element {
    return (
        <>
            <CommonNavigationBarComponent />
            <main className="w-full"></main>
        </>
    )
}

export default ContactPage

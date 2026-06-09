import type { JSX } from "react"
import CommonNavigationBarComponent from "@/humavery/components/general/layout/common/navigation/CommonNavigationBarComponent"
import Heading from "@/humavery/components/general/ui/Heading"
import Subtext from "@/humavery/components/general/ui/Subtext"
import Badge from "@/humavery/components/general/ui/Badge"
/**
 * @summary The contact page.
 * @description This page is used to display the contact page.
 * @returns The contact page.
 */
function ContactPage(): JSX.Element {
    return (
        <>
            <CommonNavigationBarComponent />
            <section className="w-full min-h-dvh bg-[url(/assets/images/background.png)] bg-cover bg-center">
                <div className="flex flex-col items-center justify-center m-auto w-full max-w-4xl px-4 pt-18 gap-6">
                    <Badge>Jesteśmy dostępni</Badge>
                    <Heading>Skontaktuj się z nami</Heading>
                    <Subtext className="max-w-xl">
                        Jeśli masz pytanie, potrzebujesz pomocy, jesteśmy do Twojej dyspozycji. Skontaktuj się z nami za
                        pomocą poniższego formularza kontaktowego, lub bezpośrednio przez{" "}
                        <a href="mailto:contact@humavery.com" className="text-blue-500 hover:underline">
                            e-mail
                        </a>
                        .
                    </Subtext>
                </div>
            </section>
        </>
    )
}

export default ContactPage

import type { JSX } from "react"

import Heading from "@/humavery/components/general/ui/Heading"
import Subtext from "@/humavery/components/general/ui/Subtext"
import Badge from "@/humavery/components/general/ui/Badge"
import ContactForm from "@/humavery/components/general/ui/ContactForm"
import FAQ from "@/humavery/components/general/ui/FAQ"
import Footer from "@/humavery/components/general/ui/Footer"

/**
 * @summary The contact page.
 * @description This page is used to display the contact page.
 * @returns The contact page.
 */
function ContactPage(): JSX.Element {
    return (
        <>
            <section
                id="contact"
                className="w-full min-h-dvh bg-[url(/assets/images/background.png)] bg-cover bg-center">
                <div className="flex flex-col items-center justify-center m-auto w-full max-w-3xl px-4 pt-28 gap-6">
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
                    <ContactForm />
                    <div className="mb-16"></div>
                </div>
            </section>
            <section id="faq" className="w-full bg-white py-16">
                <div className="flex flex-col items-center justify-center m-auto w-full max-w-3xl px-4 py-8 gap-6">
                    <Heading>
                        Najczęściej <br /> zadawane pytania
                    </Heading>
                    <Subtext className="max-w-xl">
                        Zebraliśmy odpowiedzi na najczęściej zadawane pytania. <br />
                        Jeśli nie znajdziesz tu odpowiedzi, to{" "}
                        <a href="mailto:contact@humavery.com" className="text-blue-500 hover:underline">
                            napisz do nas
                        </a>
                        .
                    </Subtext>
                    <FAQ />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ContactPage

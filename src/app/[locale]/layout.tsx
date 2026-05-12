import type { JSX } from "react"
import type { ILocaleLayoutProperties } from "@/humavery/libs/models/app/locales/layout/interfaces/ILocaleLayoutProperties"
import type { ILocaleStaticParams } from "@/humavery/libs/models/app/locales/layout/interfaces/ILocaleStaticParams"
import { hasLocale } from "next-intl"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/humavery/libs/translations/Routing"

/**
 * @summary Static params for every configured locale.
 * @description This function is used to generate the static params for every configured locale.
 * @returns The static params for every configured locale.
 */
const generateStaticParams = (): ILocaleStaticParams[] => {
    return routing.locales.map((locale: string): ILocaleStaticParams => ({ locale }))
}

/**
 * @summary Locale layout.
 * @description A layout that is used to render the locale pages with the appropriate translations.
 * @param {ILocaleLayoutProperties} props - The properties for the locale layout.
 * @returns The locale layout.
 */
async function LocaleLayout({ children, params }: ILocaleLayoutProperties): Promise<JSX.Element> {
    const { locale } = await params

    if (!hasLocale(routing.locales, locale)) notFound()
    setRequestLocale(locale)
    const messages: Record<string, string> = await getMessages()

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    )
}

export { generateStaticParams }
export default LocaleLayout

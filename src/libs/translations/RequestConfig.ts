import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"
import { routing } from "@/humavery/libs/translations/Routing"

/**
 * @summary Request-scoped next-intl configuration (messages + locale).
 * @description Loaded per request; message files are produced by the Translations repo build into `messages/`.
 */
const requestConfig = getRequestConfig(async ({ requestLocale }) => {
    const requested: string | undefined = await requestLocale
    const locale: string = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

    return {
        locale,
        messages: (await import(`@/humavery/libs/translations/messages/${locale}.json`)).default,
    }
})

export default requestConfig

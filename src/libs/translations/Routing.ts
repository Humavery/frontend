import { defineRouting } from "next-intl/routing"

/**
 * @summary Locale prefixes and supported languages for the website.
 * @description Matches {@link https://github.com/humavery/translations} `LanguagesConfiguration.yaml` (BCP 47).
 */
const routing = defineRouting({
    locales: ["en-US", "en-GB", "pl-PL"],
    defaultLocale: "en-US",
})

export { routing }
